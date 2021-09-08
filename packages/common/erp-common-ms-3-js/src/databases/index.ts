import { mongodbConnect, ConnectDbError, IConnectDatabases, IMongodbConnectArgs } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from '../databases/register-mongo-models';

export const connectDatabases: IConnectDatabases = async (mongodbConnectArgs) => {
	await initMongo(mongodbConnectArgs);
}

const initMongo = async (mongodbConnectArgs: IMongodbConnectArgs) => {
	const { uri, connectOptions } = mongodbConnectArgs;
	if (!uri) {
		throw new ConnectDbError();
	}
	const connection = await mongodbConnect(uri, connectOptions);
	for (const register of registerMongoModels) {
		register(connection)
	};
}