import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { jwtDecode } from '@gmahechas/erp-common-ms-utils-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { signinAuth } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Auth {
		id: String
  	userName: String
		companyKey: String
		iat: Int
	}
	input SigninAuth {
		companyKey: String
		userName: String
  	userPassword: String
	}
  type Query {
  	signinAuth(data: SigninAuth): Auth
	}
`;

export const resolvers = {
	Query: {
		signinAuth: async (_: any, { data }: { data: ISigninAuth }, context: IContext): Promise<IAuth> => {
			let token = context.token;
			if (!token) {
				const { token: newToken } = await signinAuth(data);
				token = newToken;
				context.req.session.token = token;
			}
			return jwtDecode(token) as IAuth;
		}
	}
};