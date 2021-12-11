import { express } from '@gmahechas/erp-common-graphqljs';
import { graphqlV1 } from './graphql';
import { session } from './loaders/session';

export const bootstrap = async () => {
	const app = express();
	app.use(await session());
	const serverV1 = await graphqlV1();
	serverV1.applyMiddleware({
		app,
		path: '/graphql/v1',
		cors: {
			origin: 'http://localhost:8000',
			credentials: true,
		}
	});
	return app;
};