import { Request, Response, NextFunction } from 'express';
import { IAuth } from '@gmahechas/erp-common';
import { jwtDecode, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

declare module 'express' {
	interface Request {
		auth?: IAuth;
	}
}

export const authenticationMiddleware = async (request: Request, response: Response, next: NextFunction) => {
	const { authorization: token } = request.headers;
	if (!token) {
		sendError(TypeErrorMessage.AUTHENTICATION);
	}
	request.auth = jwtDecode(token);
	next();
};