import { Request, Response, NextFunction } from 'express';
import { Context, sendError, TypeErrorMessage, Winston } from '@gmahechas/erp-common-ms-utils-js';

export const authorizationMiddleware = (scopes: string[]) => async (request: Request, response: Response, next: NextFunction) => {
	const auth = Context.get('auth');
	const { body, originalUrl, method, params, query } = request;
	const scope = JSON.parse(auth.scope);
	for (const capability of scopes) {
		const [service, actions] = capability.split(':');
		if (!scope[service]) {
			Winston.logger.error(TypeErrorMessage.AUTHORIZATION, { requestId: Context.get('requestId'), auth: JSON.stringify(auth), action: originalUrl, method, payload: JSON.stringify({ body, params, query }) });
			sendError(TypeErrorMessage.AUTHORIZATION);
		}
		for (const action of actions.split(',')) {
			if (!scope[service].includes(action)) {
				Winston.logger.error(TypeErrorMessage.AUTHORIZATION, { requestId: Context.get('requestId'), auth: JSON.stringify(auth), action: originalUrl, method, payload: JSON.stringify({ body, params, query }) });
				sendError(TypeErrorMessage.AUTHORIZATION);
			}
		}
	}
	next();
};