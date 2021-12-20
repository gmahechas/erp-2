import { IAuth } from '@gmahechas/erp-common';
import { AuthError, jwtDecode } from '@gmahechas/erp-common-ms-utils-js';
import { express, IContext } from '@gmahechas/erp-common-graphqljs';
declare module 'express-session' {
	interface SessionData {
		token?: string;
	}
}

export const authMiddleware = async (req: express.Request, res: express.Response): Promise<IContext> => {
	const token = req.session.token;
	if (!req.body.query.includes('query signinAuth($data: SigninAuth)')) {
		if (!token) {
			throw new AuthError();
		}
	}
	const auth = token ? jwtDecode(token) as IAuth : undefined;
	return { req, res, token, auth };
}