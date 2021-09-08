import { mongodbConnect, mongodbCreateConnection, ConnectDbError, IConnectDatabases, IMongodbConnectArgs } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from '../databases/register-mongo-models';

export const connectDatabases: IConnectDatabases = async (mongodbConnectArgs) => {
	await msMongodb(mongodbConnectArgs);
}

const msMongodb = async (mongodbConnectArgs: IMongodbConnectArgs) => {
	const { uri, connectOptions } = mongodbConnectArgs;
	if (!uri) {
		throw new ConnectDbError();
	}
	await mongodbConnect(uri, connectOptions);
	/* const connection = await mongodbCreateConnection(uri, connectOptions);
	for (const register of registerMongoModels) {
		register(connection)
	}; */
}