import { mongodbConnect, mongodbCreateConnection } from './connections.mongo';
import { ConnectDbError } from '../../errors/connect-db.error';
import { IConnectToMongo } from './mongo.interface';

let connections: string[] = [];

export const connectToMongo: IConnectToMongo = async (mongodbConnectArgs, mode, registerModelFunc = []) => {
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
				for (const register of registerModelFunc) {
					register(newConnection)
				};
				break;
			default:
				break;
		}
		connections.push(uri);
	}
}