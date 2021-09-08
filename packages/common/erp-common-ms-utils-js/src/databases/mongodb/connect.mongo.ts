import mongosee from 'mongoose';
import { IMongodbConnect } from '../mongodb/mongo.interface';

export const mongodbConnect: IMongodbConnect = (uri, connectOptions) => {

	mongosee.connection.on('connecting', () => console.log('connecting to mongodb'));
	mongosee.connection.on('connected', () => console.log('mongodb connected'));
	//mongosee.connection.on('open', () => console.log('open'));
	mongosee.connection.on('disconnecting', () => console.log('disconnecting mongodb'));
	mongosee.connection.on('disconnected', () => console.log('mongodb disconnected'));
	mongosee.connection.on('close', () => console.log('mongodb connection close'));
	mongosee.connection.on('reconnected', () => console.log('mongodb reconnected'));
	mongosee.connection.on('error', () => console.log('mongodb error'));
	mongosee.connection.on('fullsetup', () => console.log('close'));
	mongosee.connection.on('all', () => console.log('close'));
	mongosee.connection.on('reconnectFailed', () => console.log('close'));
	return mongosee.connect(uri, connectOptions);
}