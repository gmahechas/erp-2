import { IAuth, ISigninAuth } from '@gmahechas/erp-common-js';
import { Context, jwtDecode, env, Winston, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';
import { gql, express } from '@gmahechas/erp-common-graphqljs';
import { signinAuth } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Auth {
		userId: String
  	userName: String
		companyKey: String
		scope: String
	}
	input SigninAuth {
		userName: String
  	userPassword: String
		companyKey: String
	}
  type Query {
  	signinAuth(data: SigninAuth): Auth
		signoutAuth: Auth @authentication @logger
  	meAuth: Auth @authentication @logger
	}
`;

export const resolvers = {
	Query: {
		signinAuth: async (_: any, { data }: { data: ISigninAuth }, { req }: { req: express.Request }): Promise<IAuth> => {
			Context.set('requestId', uuidv4());
			Winston.logger.info('logger', { requestId: Context.get('requestId'), auth: JSON.stringify(null), action: 'signinAuth', method: req.method, payload: JSON.stringify({ data }), sourceIp: req.ip });
			const { token } = await signinAuth(data);
			req.session.token = token;
			const auth = jwtDecode(token) as IAuth;
			return auth;
		},
		signoutAuth: async (_: any, __: any, { req, res }: { req: express.Request, res: express.Response }): Promise<IAuth> => {
			return new Promise((resolve, reject) => {
				const auth = Context.get('auth');
				const { cookie_name } = env['ms-0']!.session!;
				req.session.destroy((error: any) => error && reject(error));
				res.clearCookie(cookie_name!);
				Context.clear();
				resolve(auth!);
			});
		},
		meAuth: async (_: any, __: any): Promise<IAuth> => {
			return Context.get('auth')
		} 
	}
};