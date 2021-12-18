import { sendError, TypeErrorMessage, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { ms } = env;
	if (!ms?.four?.databases?.mongo?.uri) {
		sendError(TypeErrorMessage.DB_CONNECTION);
	}
	const { four: { databases: { mongo: { uri } } } } = ms;
	await connectToMongo({ uri }, 'createConnection', registerMongoModels);
}