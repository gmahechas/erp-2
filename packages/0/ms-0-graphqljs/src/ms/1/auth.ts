import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { asyncMiddleware } from '../../middlewares/async.middleware';

export const typeDefs = gql`
	type Auth {
		id: String
  	userName: String
  	token: String
	}
  type Query {
  	signinAuth(userName: String, userPassword: String): Auth
	}
`;

export const resolvers = {
	Query: {
		signinAuth: asyncMiddleware(async (_: object, args: ISigninAuth, context: IContext): Promise<IAuth> => {
			const { data: response } = await axiosClient('http://localhost:50001').post<{ data: IAuth }>('/rest/v1/1/auth/signin', args);
			context.req.session.auth = response.data;
			return response.data;
		})
	}
};