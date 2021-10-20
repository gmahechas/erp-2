import mongoose from 'mongoose';
import { mongodbConnect, mongodbCreateConnection } from './connections.mongo';
import { IConnectToMongo } from './mongo.interface';

let connections: { uri: string, connection: mongoose.Connection }[] = [];

export const connectToMongo: IConnectToMongo = async (mongodbConnectArgs, mode, registerModelFunc = []) => {
	const { uri, connectOptions } = mongodbConnectArgs;
	const connection = connections.find(connection => connection.uri === uri);
	if (connection == undefined) {
		let conn: mongoose.Connection;
		if (mode == 'connect') {
			conn = await mongodbConnect(uri, connectOptions);
		} else {
			conn = await mongodbCreateConnection(uri, connectOptions);
			for (const register of registerModelFunc) {
				register(conn)
			};
		}
		connections.push({ uri, connection: conn });
		return conn;
	} else {
		return connection.connection;
	}
}