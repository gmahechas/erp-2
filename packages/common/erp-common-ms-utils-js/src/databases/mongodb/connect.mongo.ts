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

			mongoConnection.on('connecting', () => console.log('connecting to mongodb'));
			mongoConnection.on('connected', () => console.log('mongodb connected'));
			//mongoConnection.on('open', () => console.log('open'));
			mongoConnection.on('disconnecting', () => console.log('disconnecting mongodb'));
			mongoConnection.on('disconnected', () => console.log('mongodb disconnected'));
			mongoConnection.on('close', () => console.log('mongodb connection close'));
			mongoConnection.on('reconnected', () => console.log('mongodb reconnected'));
			mongoConnection.on('error', () => console.log('mongodb error'));
			mongoConnection.on('fullsetup', () => console.log('close'));
			mongoConnection.on('all', () => console.log('close'));
			mongoConnection.on('reconnectFailed', () => console.log('close'));
		}
		return connection;
	} catch (error) {
		throw new ConnectDbError();
	}
}