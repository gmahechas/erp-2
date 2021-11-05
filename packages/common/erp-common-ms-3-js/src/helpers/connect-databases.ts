import { sendError, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { ms } = env;
	if (!ms?.three?.command?.databases?.mongo?.uri) {
		sendError('db_connection');
	}
	const {
		three: {
			command: { databases: { mongo: { uri: commandUri } } }
		}
	} = ms;
	await connectToMongo({ uri: commandUri }, 'createConnection', registerMongoModels);
}