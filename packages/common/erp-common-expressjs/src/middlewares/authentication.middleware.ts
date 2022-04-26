import { Request, Response, NextFunction } from 'express';
import { Context, jwtDecode, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { IAuth } from '@gmahechas/erp-common';

export const authenticationMiddleware = async (request: Request, response: Response, next: NextFunction) => {
	const { authorization: token } = request.headers;
	if (!token) {
		sendError(TypeErrorMessage.AUTHENTICATION);
	}
	const auth = jwtDecode(token) as IAuth;
	Context.set('token', token);
	Context.set('auth', auth);
	next();
};