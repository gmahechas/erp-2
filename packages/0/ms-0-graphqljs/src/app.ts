import { express } from '@gmahechas/erp-common-graphqljs';
import { env, session } from '@gmahechas/erp-common-ms-utils-js';
import { graphqlV1 } from './graphql';

export const bootstrap = async () => {
	const app = express();
	app.use(await session(env['ms-0']!.session!.redis!.url!, {
		name: 'cerp',
		secret: 'aslkdfjoiq12312',
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			secure: false,
			maxAge: 1000 * 60 * 60 * 24 * 7,
		}
	}));
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