import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { jwtDecode } from '@gmahechas/erp-common-ms-utils-js';
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
			let { token, auth, req } = context;
			if (!token) {
				const { token: newToken } = await signinAuth(data);
				token = newToken;
				req.session.token = token;
			}
			return auth ? auth : jwtDecode(token) as IAuth;
		},
		signoutAuth: async (_: any, __: any, { auth, req, res }: IContext): Promise<IAuth> => {
			return new Promise((resolve, reject) => {
				req.session.destroy((error) => error && reject(error));
				res.clearCookie('cerp');
				resolve(auth!);
			});
		},
		meAuth: async (_: any, __: any, { auth }: IContext): Promise<IAuth> => auth!
	}
};