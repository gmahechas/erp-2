import { jwtDecode, env } from '@gmahechas/erp-common-ms-utils-js';
import { express, IContext } from '@gmahechas/erp-common-graphqljs';

export const authenticationMiddleware = async (req: express.Request, res: express.Response): Promise<IContext | undefined> => {
	const token = req.session.token;
	if (req.body.query.includes('query signinAuth($data: SigninAuth)')) {
		return { req, res, token };
	} else {
		try {
			const auth = jwtDecode(token!);
			return { req, res, token, auth };
		} catch (error) {
			if(req.session.token) {
				const { cookie_name } = env['ms-0']!.session!;
				req.session.destroy((error) => error);
				res.clearCookie(cookie_name!);
			}
			throw error;
		}
	}
}