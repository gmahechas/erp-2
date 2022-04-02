import { IAuth } from '@gmahechas/erp-common';
import { AuthenticationError, jwtDecode } from '@gmahechas/erp-common-ms-utils-js';
import { express, IContext } from '@gmahechas/erp-common-graphqljs';

export const authenticationMiddleware = async (req: express.Request, res: express.Response): Promise<IContext> => {
	const token = req.session.token;
	if (!req.body.query.includes('query signinAuth($data: SigninAuth)')) {
		if (!token) {
			throw new AuthenticationError();
		}
	}
	const auth = token ? jwtDecode(token) as IAuth : undefined;
	return { req, res, token, auth };
}