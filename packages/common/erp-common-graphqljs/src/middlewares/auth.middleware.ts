import express from 'express';
import { IAuth } from '@gmahechas/erp-common';

declare global {
	namespace Express {
		interface Request {
			auth?: IAuth
		}
	}
}
export const authMiddleware = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	request.auth = { id: 'tim', userName: 'theUser', token: 'dkjdsdklsd' };
	next();
}