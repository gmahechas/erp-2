import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { jwtDecode } from '@gmahechas/erp-common-ms-utils-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { signinAuth } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Auth {
		id: String
  	userName: String
		iat: Int
	}
  type Query {
  	signinAuth(userName: String, userPassword: String): Auth
	}
`;

export const resolvers = {
	Query: {
		signinAuth: async (_: object, args: ISigninAuth, context: IContext): Promise<any> => {
			let token = context.token;
			if (!token) {
				const { token: newToken } = await signinAuth(args);
				token = newToken;
				context.req.session.token = token;
			}
			return jwtDecode(token) as IAuth;
		}
	}
};