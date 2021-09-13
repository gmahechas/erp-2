import { dotenv } from '@gmahechas/erp-common-ms-utils-js'
import { express } from '@gmahechas/erp-common-graphqljs';
import graphql from './graphql';

dotenv.config();

export default async () => {
	const app = express();
	const server = await graphql();
	server.applyMiddleware({ app });
	return app;
};