import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { createLogger, Logger, format, transports } from '@gmahechas/erp-common-ms-utils-js';
import { IContext } from '../interfaces';

const logger: Logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp(),
		format.logstash(),
	),
	transports: [
		new transports.File({ filename: 'logs/app.log' }),
	],
	exitOnError: false,
});

export const loggerDirective = (schema: GraphQLSchema, directiveName: string) => mapSchema(schema, {
	[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
		const loggerDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
		if (loggerDirective) {
			const { resolve = defaultFieldResolver } = fieldConfig;
			fieldConfig.resolve = async (source, args, context: IContext, info) => {
				const { req, auth } = context;
				const { fieldName } = info;
				logger.info(JSON.stringify(args), { auth, action: fieldName });
				return await resolve(source, args, context, info);
			}
			return fieldConfig;
		}
	},
});