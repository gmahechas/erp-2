import { sendError } from '@gmahechas/erp-common-ms-utils-js';
import { express, IContext } from '@gmahechas/erp-common-graphqljs';
declare module 'express-session' {
	interface SessionData {
		token?: string;
	}
}

export const authMiddleware = async (req: express.Request, res: express.Response): Promise<IContext> => {
/* 	const token = req.session.token;
	if (!req.body.query.includes('signinAuth')) {
		if (!token) {
			sendError('authentication_error')
		}
		return { req, res, token };
	} else {
		return { req, res, token };
	} */
	return { req, res, token: '' };
}