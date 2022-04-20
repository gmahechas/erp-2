import { express } from '@gmahechas/erp-common-graphqljs';
import { graphqlV1 } from './graphql';

export const bootstrap = async () => {
	const app = express();
	app.disable('x-powered-by');
	const serverV1 = await graphqlV1();
	serverV1.applyMiddleware({
		app,
		path: '/graphql/v1',
/* 		cors: {
			origin: 'http://localhost:8000',
			credentials: true,
		} */
});
	return app;
};