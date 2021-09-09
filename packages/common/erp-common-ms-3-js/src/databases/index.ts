import { mongodbConnect, mongodbCreateConnection, ConnectDbError, IConnectDatabases } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from '../databases/register-mongo-models';

let connections: string[] = [];

export const connectDatabases: IConnectDatabases = async (mongodbConnectArgs, mode) => {
	const { uri, connectOptions } = mongodbConnectArgs;
	if (!uri) {
		throw new ConnectDbError();
	}
	const connection = connections.find(connection => connection === uri);

	if (connection == undefined) {
		switch (mode) {
			case 'connect':
				await mongodbConnect(uri, connectOptions);
				break;
			case 'createConnection':
				const newConnection = await mongodbCreateConnection(uri, connectOptions);
				for (const register of registerMongoModels) {
					register(newConnection)
				};
				break;
			default:
				break;
		}
		connections.push(uri);
	}
}