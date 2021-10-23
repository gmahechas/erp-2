import { sendError, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMsMongoModels, registerMsQueryMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { ms } = env;
	if (
		!ms?.one?.command?.databases?.mongo?.uri ||
		!ms?.one?.query?.databases?.mongo?.uri
	) {
		sendError('db_connection');
	}
	const {
		one: {
			command: { databases: { mongo: { uri: commandUri } } },
			query: { databases: { mongo: { uri: queryUri } } }
		}
	} = ms;
	await connectToMongo({ uri: commandUri }, 'createConnection', registerMsMongoModels);
	await connectToMongo({ uri: queryUri }, 'createConnection', registerMsQueryMongoModels);
}