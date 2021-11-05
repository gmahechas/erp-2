import { express } from '@gmahechas/erp-common-graphqljs';
import { graphqlV1 } from './graphql';

export const bootstrap = async () => {
	const app = express();
	const serverV1 = await graphqlV1();
	serverV1.applyMiddleware({ app, path: '/graphql/v1' });
	return app;
};