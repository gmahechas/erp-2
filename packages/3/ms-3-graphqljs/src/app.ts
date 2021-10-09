import { express } from '@gmahechas/erp-common-graphqljs';
import graphql from './graphql';

export default async () => {
	const app = express();
	const server = await graphql();
	server.applyMiddleware({ app });
	return app;
};