import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { signinAuth } from '@gmahechas/erp-common-ms-0-js';

import { asyncMiddleware } from '../../middlewares/async.middleware';

export const typeDefs = gql`
	type Auth {
		id: String
  	userName: String
	}
  type Query {
  	signinAuth(userName: String, userPassword: String): Auth
	}
`;

export const resolvers = {
	Query: {
		signinAuth: asyncMiddleware(async (_: object, args: ISigninAuth, context: IContext): Promise<IAuth> => {
			const data = await signinAuth(args);
			context.req.session.auth = data;
			return data;
		})
	}
};