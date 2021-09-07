import mongosee, { Mongoose } from 'mongoose';
import { IMongodbConnect } from '../mongodb/mongo.interface';
import { ConnectDbError } from '../../errors/connect-db.error';

let connection: Promise<Mongoose>;

export const mongodbConnect: IMongodbConnect = async (uri, connectOptions) => {
	try {
		if (connection == undefined) {
			connection = mongosee.connect(uri, connectOptions);
			mongosee.connection.on('connecting', () => console.log('connecting'));
			mongosee.connection.on('connected', () => console.log('connected'));
			//mongosee.connection.on('open', () => console.log('open'));
			mongosee.connection.on('disconnecting', () => console.log('disconnecting'));
			mongosee.connection.on('disconnected', () => console.log('disconnected'));
			mongosee.connection.on('close', () => console.log('close'));
			mongosee.connection.on('reconnected', () => console.log('reconnected'));
			mongosee.connection.on('error', () => console.log('error'));
			mongosee.connection.on('fullsetup', () => console.log('close'));
			mongosee.connection.on('all', () => console.log('close'));
			mongosee.connection.on('reconnectFailed', () => console.log('close'));
			await connection;
		}
	} catch (error) {
		throw new ConnectDbError();
	}
}