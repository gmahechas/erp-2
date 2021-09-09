import mongosee from 'mongoose';
import { IMongodbConnect } from './mongo.interface';

export const mongodbConnect: IMongodbConnect = (uri, connectOptions) => {
	const connection = mongosee.connect(uri, connectOptions);
	mongosee.connection.on('connecting', () => console.log('connecting to mongodb'));
	mongosee.connection.on('connected', () => console.log('mongodb connected'));
	//mongosee.connection.on('open', () => console.log('mongodb connection open'));
	mongosee.connection.on('disconnecting', () => console.log('disconnecting mongodb'));
	mongosee.connection.on('disconnected', () => console.log('mongodb disconnected'));
	mongosee.connection.on('close', () => console.log('mongodb connection closed'));
	mongosee.connection.on('reconnected', () => console.log('mongodb reconnected'));
	mongosee.connection.on('error', () => console.log('mongodb error'));
	mongosee.connection.on('fullsetup', () => console.log('fullsetup'));
	mongosee.connection.on('all', () => console.log('all'));
	mongosee.connection.on('reconnectFailed', () => console.log('reconnectFailed'));
	return connection;
}

export const mongodbCreateConnection: IMongodbConnect = (uri, connectOptions) => {
	const connection = mongosee.createConnection(uri, connectOptions);
	connection.on('connecting', () => console.log('connecting to mongodb'))
	connection.on('connected', () => console.log('mongodb connected'))
	//connection.on('open', () => console.log('mongodb connection open'))
	connection.on('disconnecting', () => console.log('disconnecting mongodb'))
	connection.on('disconnected', () => console.log('mongodb disconnected'))
	connection.on('close', () => console.log('mongodb connection closed'))
	connection.on('reconnected', () => console.log('mongodb reconnected'))
	connection.on('error', () => console.log('mongodb error'))
	connection.on('fullsetup', () => console.log('fullsetup'))
	connection.on('all', () => console.log('all'))
	connection.on('reconnectFailed', () => console.log('reconnectFailed'));
	return connection.asPromise();
}