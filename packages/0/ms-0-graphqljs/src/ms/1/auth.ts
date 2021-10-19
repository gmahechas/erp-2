import { axiosClient, IResponse } from '@gmahechas/erp-common';
import { gql, IContext, asyncMiddleware } from '@gmahechas/erp-common-graphqljs';

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
		signinAuth: asyncMiddleware(async (parent: any, args: any, context: IContext) => {
			const { data: response } = await axiosClient('http://localhost:50001').post<{ data: IResponse }>('/rest/v1/1/auth/signin', args);
			const { id, userName, token } = response.data as any;
			/* context.response.cookie('cerp', token, {
				httpOnly: true,
				maxAge: 1000 * 60 * 60 * 24 * 7
			}); */
			return ({ id, userName, token });
		})
	}
};