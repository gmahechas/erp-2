import { Request, Response, NextFunction } from 'express';
import { Context, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const authorizationMiddleware = (scopes: string[]) => async (request: Request, response: Response, next: NextFunction) => {
	const auth = Context.get('auth');
	if (!auth) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}
	const scope = JSON.parse(auth.scope);
	console.log(scope);
	for (const capability of scopes) {
		const [service, actions] = capability.split(':');
		if (!scope[service]) {
			sendError(TypeErrorMessage.AUTHORIZATION);
		}
		for (const action of actions.split(',')) {
			if (!scope[service].includes(action)) {
				sendError(TypeErrorMessage.AUTHORIZATION);
			}
		}
	}
	next();
};