import { Request, Response, NextFunction } from 'express';
import { IAuth } from '@gmahechas/erp-common';
import { Context, jwtDecode, sendError, TypeErrorMessage, uuidv4, Winston } from '@gmahechas/erp-common-ms-utils-js';

export const authenticationMiddleware = async (request: Request, response: Response, next: NextFunction) => {
	const requestId = request.headers['x-request-id'] as string || uuidv4();
	Context.set('requestId', requestId);
	const { authorization: token } = request.headers;
	const { body, originalUrl, method, params, query } = request;
	if (!token) {
		Winston.logger.error(TypeErrorMessage.AUTHENTICATION, { requestId: Context.get('requestId'), auth: JSON.stringify(null), action: originalUrl, method, payload: JSON.stringify({ body, params, query }) });
		Context.clear();
		sendError(TypeErrorMessage.AUTHENTICATION);
	}
	const auth = jwtDecode(token) as IAuth;
	Context.set('token', token);
	Context.set('auth', auth);
	next();
};