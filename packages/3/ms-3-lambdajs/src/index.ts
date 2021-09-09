import { connectDatabases } from '@gmahechas/erp-common-ms-3-js'
import { handlerLambda } from '@gmahechas/erp-common-lambdajs';
import env from './config/env';
import routes from './routes';

export const handler = handlerLambda(
	routes,
	connectDatabases,
	[
		{ uri: env.msMongodbUri, connectOptions: { serverSelectionTimeoutMS: (1000 * 5) } },
		{ uri: env.msQueryMongodbUri, connectOptions: { serverSelectionTimeoutMS: (1000 * 5) } },
	]
);