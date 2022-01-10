import { sendError, TypeErrorMessage, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { "ms-3": ms3 } = env;
	if (!ms3?.databases?.mongo?.uri) {
		sendError(TypeErrorMessage.DB_CONNECTION);
	}
	const { databases: { mongo: { uri } } } = ms3;
	await connectToMongo({ uri }, 'createConnection', registerMongoModels);
}