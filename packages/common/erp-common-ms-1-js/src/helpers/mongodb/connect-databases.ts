import { sendError, TypeErrorMessage, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { "ms-1": ms1 } = env;
	if (!ms1?.databases?.mongo?.uri) {
		sendError(TypeErrorMessage.DB_CONNECTION);
	}
	const { databases: { mongo: { uri } } } = ms1;
	await connectToMongo({ uri }, 'createConnection', registerMongoModels);
}