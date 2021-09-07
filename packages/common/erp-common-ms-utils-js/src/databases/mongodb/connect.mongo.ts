import mongosee, { Connection } from 'mongoose';
import { IMongodbConnect } from '../mongodb/mongo.interface';
import { ConnectDbError } from '../../errors/connect-db.error';

let connection: Promise<Connection>;

export const mongodbConnect: IMongodbConnect = async (uri, connectOptions) => {
	try {
		if (connection == undefined) {
			connection = new Promise((resolve, reject) => {
				const conn = mongosee.createConnection(uri, connectOptions);
				if(conn) {
					resolve(conn);
				} else {
					reject(conn)
				}
			});
			const mongoConnection = await connection;

			mongoConnection.on('connecting to mongodb', () => console.log('connecting'));
			mongoConnection.on('mongodb connected', () => console.log('connected'));
			//mongoConnection.on('open', () => console.log('open'));
			mongoConnection.on('disconnecting mongodb', () => console.log('disconnecting'));
			mongoConnection.on('mongodb disconnected', () => console.log('disconnected'));
			mongoConnection.on('mongodb connection closed', () => console.log('close'));
			mongoConnection.on('mongodb connection reconnected', () => console.log('reconnected'));
			mongoConnection.on('mongo error', () => console.log('error'));
			mongoConnection.on('fullsetup', () => console.log('close'));
			mongoConnection.on('all', () => console.log('close'));
			mongoConnection.on('reconnectFailed', () => console.log('close'));
		}
		return connection;
	} catch (error) {
		throw new ConnectDbError();
	}
}