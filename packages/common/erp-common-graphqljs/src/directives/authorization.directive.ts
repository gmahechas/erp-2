import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { sendError, TypeErrorMessage, Winston } from '@gmahechas/erp-common-ms-utils-js';
import { IContext } from '../interfaces';

export const authorizationDirective = (schema: GraphQLSchema, directiveName: string) => mapSchema(schema, {
	[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
		const authorizationDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
		if (authorizationDirective) {
			const { resolve = defaultFieldResolver } = fieldConfig;
			fieldConfig.resolve = async (source, args, context: IContext, info) => {
				const { auth } = context;
				const { fieldName } = info;
				if (!auth) {
					Winston.logger.error(TypeErrorMessage.AUTHORIZATION, { auth, action: fieldName, payload: { args } });
					sendError(TypeErrorMessage.AUTHORIZATION);
				}
				const scope = JSON.parse(auth.scope);
				const scopes = authorizationDirective['scopes'];
				for (const capability of scopes) {
					const [service, actions] = capability.split(':');
					if (!scope[service]) {
						Winston.logger.error(JSON.stringify({ type: TypeErrorMessage.AUTHORIZATION }), { auth, action: fieldName, payload: { args } });
						sendError(TypeErrorMessage.AUTHORIZATION);
					}
					for (const action of actions.split(',')) {
						if (!scope[service].includes(action)) {
							Winston.logger.error(JSON.stringify({ type: TypeErrorMessage.AUTHORIZATION }), { auth, action: fieldName, payload: { args } });
							sendError(TypeErrorMessage.AUTHORIZATION);
						}
					}
				}
				return await resolve(source, args, context, info);
			}
			return fieldConfig;
		}
	},
});