import { connectToMongo } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from '@gmahechas/erp-common-ms-3-js';
import { handlerLambda } from '@gmahechas/erp-common-lambdajs';
import env from './config/env';
import routes from './routes';

export const handler = handlerLambda(
	routes,
	connectToMongo,
	[
		{
			mongodbConnectArg: { uri: env.msMongodbUri, connectOptions: { serverSelectionTimeoutMS: (1000 * 5) } },
			registerModelFunc: registerMongoModels
		},
		/* {
			mongodbConnectArg: { uri: env.msQueryMongodbUri, connectOptions: { serverSelectionTimeoutMS: (1000 * 5) } },
			registerModelFunc: registerMongoModels
		} */
	]
);