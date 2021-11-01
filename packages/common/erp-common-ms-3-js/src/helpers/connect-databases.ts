import { sendError, connectToMongo, env, ICQ } from '@gmahechas/erp-common-ms-utils-js';
import { registerMsMongoModels, registerMsQueryMongoModels } from './register-mongo-models';

export const connectDatabases = async ({ command, query }: ICQ) => {
	const { ms } = env;
	if (command) {
		if (!ms?.three?.command?.databases?.mongo?.uri) {
			sendError('db_connection');
		}
		const {
			three: {
				command: { databases: { mongo: { uri: commandUri } } }
			}
		} = ms;
		await connectToMongo({ uri: commandUri }, 'createConnection', registerMsMongoModels);
	}

	if (query) {
		if (!ms?.three?.query?.databases?.mongo?.uri) {
			sendError('db_connection');
		}
		const {
			three: {
				query: { databases: { mongo: { uri: queryUri } } }
			}
		} = ms;
		await connectToMongo({ uri: queryUri }, 'createConnection', registerMsQueryMongoModels);
	}
}