import { connectToMongo } from '@gmahechas/erp-common-ms-utils-js';
import { registerMsMongoModels, registerMsQueryMongoModels } from './register-mongo-models';

const env = import('../config/env');
export const connectDatabases = async () => {
	const { msPort, msMongodbUri, msQueryMongodbUri } = (await env).default;
	await connectToMongo({ uri: msMongodbUri }, 'createConnection', registerMsMongoModels);
	//await connectToMongo({ uri: msQueryMongodbUri }, 'createConnection', registerMsQueryMongoModels);
}