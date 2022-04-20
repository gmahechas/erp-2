import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { IContext } from '../interfaces';

export const authenticationDirective = (schema: GraphQLSchema, directiveName: string) => {
	return mapSchema(schema, {
		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
			const authenticationDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
			if (authenticationDirective) {
				const { resolve = defaultFieldResolver } = fieldConfig;
				fieldConfig.resolve = async (source, args, context: IContext, info) => {
					try {
						const { auth } = context;
						if (!auth) {
							sendError(TypeErrorMessage.AUTHENTICATION);
						}
						return await resolve(source, args, context, info);
					} catch (error) {
						sendError(TypeErrorMessage.AUTHENTICATION);
					}

				}
				return fieldConfig;
			}
		},
	});
}