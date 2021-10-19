import { express, authMiddleware } from '@gmahechas/erp-common-graphqljs';
import graphql from './graphql';

export default async () => {
	const app = express();
	app.use(authMiddleware);
	const server = await graphql();
	server.applyMiddleware({ app });
	return app;
};