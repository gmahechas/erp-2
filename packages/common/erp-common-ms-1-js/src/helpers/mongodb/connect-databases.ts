import { sendError, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { ms } = env;
	if (!ms?.one?.databases?.mongo?.uri) {
		sendError('db_connection');
	}
	const { one: { databases: { mongo: { uri } } } } = ms;
	await connectToMongo({ uri }, 'createConnection', registerMongoModels);
}