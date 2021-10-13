import { ConnectDbError, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMsMongoModels, registerMsQueryMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { databases } = env;
	if (!databases?.cqrs?.mongo?.command?.uri || !databases?.cqrs?.mongo.query?.uri) {
		throw new ConnectDbError();
	}
	const { cqrs: { mongo: { command: { uri: commandUri }, query: { uri: queryUri } } } } = databases;
	await connectToMongo({ uri: commandUri }, 'createConnection', registerMsMongoModels);
	await connectToMongo({ uri: queryUri }, 'createConnection', registerMsQueryMongoModels);
}