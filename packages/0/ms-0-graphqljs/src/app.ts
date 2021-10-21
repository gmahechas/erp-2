import { express } from '@gmahechas/erp-common-graphqljs';
import graphql from './graphql';
import { session } from './loaders/session';

export default async () => {
	const app = express();
	app.use(await session());
	const server = await graphql();
	server.applyMiddleware({ app });
	return app;
};