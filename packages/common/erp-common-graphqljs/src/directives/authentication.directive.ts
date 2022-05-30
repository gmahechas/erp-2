import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { IAuth } from '@gmahechas/erp-common';
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { Context, jwtDecode, env, sendError, TypeErrorMessage, Winston } from '@gmahechas/erp-common-ms-utils-js';
import { IContext } from '../interfaces';

export const authenticationDirective = (schema: GraphQLSchema, directiveName: string) => mapSchema(schema, {
	[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
		const authenticationDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
		if (authenticationDirective) {
			const { resolve = defaultFieldResolver } = fieldConfig;
			fieldConfig.resolve = async (source, args, context: IContext, info) => {
				const { req, res } = context;
				const { fieldName } = info;
				const token = req.session.token;
				if (!token) {
					Winston.logger.error(TypeErrorMessage.AUTHENTICATION, { auth: JSON.stringify(null), action: fieldName, method: req.method, payload: JSON.stringify({ args }), sourceIp: req.ip });
					const { cookie_name } = env['ms-0']!.session!;
					req.session.destroy((error) => error);
					res.clearCookie(cookie_name!);
					sendError(TypeErrorMessage.AUTHENTICATION);
					sendError(TypeErrorMessage.AUTHENTICATION);
				}
				const auth = jwtDecode(token);
				if (!auth) {
					Winston.logger.error(TypeErrorMessage.AUTHENTICATION, { auth: JSON.stringify(null), action: fieldName, method: req.method, payload: JSON.stringify({ args }), sourceIp: req.ip });
					const { cookie_name } = env['ms-0']!.session!;
					req.session.destroy((error) => error);
					res.clearCookie(cookie_name!);
					sendError(TypeErrorMessage.AUTHENTICATION);
				}

				Context.set('token', token);
				Context.set('auth', auth);
				return await resolve(source, args, context, info);
			}
			return fieldConfig;
		}
	},
});