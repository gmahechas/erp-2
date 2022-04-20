import { helmet } from '@gmahechas/erp-common-ms-utils-js';
import { express } from '@gmahechas/erp-common-graphqljs';
import { initSession, notFoundMiddleware } from './middlewares';
import { graphqlV1 } from './graphql';

export const bootstrap = async () => {
	const app = express();
	app.disable('x-powered-by');
	app.use(helmet());
	app.use(await initSession());
	const serverV1 = await graphqlV1();
	serverV1.applyMiddleware({
		app,
		path: '/graphql/v1',
		cors: {
			origin: 'http://localhost:8000',
			credentials: true,
		},
	});
	app.use(notFoundMiddleware);
	return app;
};