import { sendError, TypeErrorMessage, connectToMongo, env } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from './register-mongo-models';

export const connectDatabases = async () => {
	const { "ms-4": ms4 } = env;
	if (!ms4?.databases?.mongo?.uri) {
		sendError(TypeErrorMessage.MONGO);
	}
	const { databases: { mongo: { uri } } } = ms4;
	await connectToMongo({ uri }, 'createConnection', registerMongoModels);
}