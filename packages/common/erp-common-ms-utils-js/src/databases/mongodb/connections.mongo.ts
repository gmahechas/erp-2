import mongosee from 'mongoose';
import { IMongodbConnect } from './mongo.interface';

export const mongodbConnect: IMongodbConnect = (uri, connectOptions) => {
	mongosee.connect(uri, connectOptions);
	const mongooseConnection = mongosee.connection;
	mongooseConnection.on('connecting', () => console.log(`connecting to mongodb: ${mongooseConnection.host}`));
	mongooseConnection.on('connected', () => console.log(`mongodb connected to: ${mongooseConnection.host}`));
	//mongooseConnection.on('open', () => console.log(`mongodb connection open: ${mongooseConnection.host}`))
	mongooseConnection.on('disconnecting', () => console.log(`disconnecting mongodb: ${mongooseConnection.host}`));
	mongooseConnection.on('disconnected', () => console.log(`mongodb disconnected: ${mongooseConnection.host}`));
	mongooseConnection.on('close', () => console.log(`mongodb connection closed: ${mongooseConnection.host}`))
	mongooseConnection.on('reconnected', () => console.log(`mongodb reconnected: ${mongooseConnection.host}`));
	mongooseConnection.on('error', () => console.log(`mongodb error: ${mongooseConnection.host}`));
	mongooseConnection.on('fullsetup', () => console.log(`fullsetup: ${mongooseConnection.host}`));
	mongooseConnection.on('all', () => console.log(`all: ${mongooseConnection.host}`));
	mongooseConnection.on('reconnectFailed', () => console.log(`reconnectFailed: ${mongooseConnection.host}`));
	return mongooseConnection.asPromise();
}

export const mongodbCreateConnection: IMongodbConnect = (uri, connectOptions) => {
	const connection = mongosee.createConnection(uri, connectOptions);
	connection.on('connecting', () => console.log(`connecting to mongodb: ${connection.host}`));
	connection.on('connected', () => console.log(`mongodb connected to: ${connection.host}`));
	//connection.on('open', () => console.log(`mongodb connection open: ${connection.host}`));
	connection.on('disconnecting', () => console.log(`disconnecting mongodb: ${connection.host}`));
	connection.on('disconnected', () => console.log(`mongodb disconnected: ${connection.host}`));
	connection.on('close', () => console.log(`mongodb connection closed: ${connection.host}`));
	connection.on('reconnected', () => console.log(`mongodb reconnected: ${connection.host}`));
	connection.on('error', () => console.log(`mongodb error: ${connection.host}`));
	connection.on('fullsetup', () => console.log(`fullsetup: ${connection.host}`));
	connection.on('all', () => console.log(`all: ${connection.host}`));
	connection.on('reconnectFailed', () => console.log(`reconnectFailed: ${connection.host}`));
	return connection.asPromise();
}