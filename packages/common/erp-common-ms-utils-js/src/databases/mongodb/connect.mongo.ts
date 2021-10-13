import { mongodbConnect, mongodbCreateConnection } from './connections.mongo';
import { IConnectToMongo } from './mongo.interface';

let connections: string[] = [];

export const connectToMongo: IConnectToMongo = async (mongodbConnectArgs, mode, registerModelFunc = []) => {
	const { uri, connectOptions } = mongodbConnectArgs;
	const connection = connections.find(connection => connection === uri);
	if (connection == undefined) {
		switch (mode) {
			case 'connect':
				const newConnection2 = await mongodbConnect(uri, connectOptions);
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