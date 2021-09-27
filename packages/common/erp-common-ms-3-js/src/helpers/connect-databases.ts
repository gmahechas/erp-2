import { connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMsMongoModels, registerMsQueryMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { mongo: { command: { uri: commandUri }, query: { uri: queryUri } } } = env;
	await connectToMongo({ uri: commandUri }, 'createConnection', registerMsMongoModels);
	await connectToMongo({ uri: queryUri }, 'createConnection', registerMsQueryMongoModels);
}