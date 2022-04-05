import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { jwtDecode, env } from '@gmahechas/erp-common-ms-utils-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { signinAuth } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Auth {
		id: String
  	userName: String
		companyKey: String
	}
	input SigninAuth {
		userName: String
  	userPassword: String
		companyKey: String
	}
  type Query {
  	signinAuth(data: SigninAuth): Auth
		signoutAuth: Auth
  	meAuth: Auth
	}
`;

export const resolvers = {
	Query: {
		signinAuth: async (_: any, { data }: { data: ISigninAuth }, context: IContext): Promise<IAuth> => {
			let { req } = context;
			const { token }  = await signinAuth(data);
			req.session.token = token;
			return jwtDecode(token) as IAuth;
		},
		signoutAuth: async (_: any, __: any, { auth, req, res }: IContext): Promise<IAuth> => {
			return new Promise((resolve, reject) => {
				const { cookie_name } = env['ms-0']!.session!;
				req.session.destroy((error) => error && reject(error));
				res.clearCookie(cookie_name!);
				resolve(auth!);
			});
		},
		meAuth: async (_: any, __: any, { auth }: IContext): Promise<IAuth> => auth!
	}
};