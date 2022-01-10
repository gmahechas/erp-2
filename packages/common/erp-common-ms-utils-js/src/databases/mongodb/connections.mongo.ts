import mongosee from 'mongoose';
import { IMongodbConnect } from './mongo.interface';

export const mongodbConnect: IMongodbConnect = (uri, connectOptions) => {
	mongosee.connect(uri, connectOptions);
	const mongooseConnection = mongosee.connection;
	mongooseConnection.on('connecting', () => console.log(`connecting to mongodb: ${mongooseConnection.host}`));
	mongooseConnection.on('connected', () => console.log(`mongodb connected to: ${mongooseConnection.host}:${mongooseConnection.port}/${mongooseConnection.name}`));
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
	const mongooseConnection = mongosee.createConnection(uri, connectOptions);
	mongooseConnection.on('connecting', () => console.log(`connecting to mongodb: ${mongooseConnection.host}`));
	mongooseConnection.on('connected', () => console.log(`mongodb connected to: ${mongooseConnection.host}:${mongooseConnection.port}/${mongooseConnection.name}`));
	//mongooseConnection.on('open', () => console.log(`mongodb mongooseConnection open: ${mongooseConnection.host}`));
	mongooseConnection.on('disconnecting', () => console.log(`disconnecting mongodb: ${mongooseConnection.host}`));
	mongooseConnection.on('disconnected', () => console.log(`mongodb disconnected: ${mongooseConnection.host}`));
	mongooseConnection.on('close', () => console.log(`mongodb mongooseConnection closed: ${mongooseConnection.host}`));
	mongooseConnection.on('reconnected', () => console.log(`mongodb reconnected: ${mongooseConnection.host}`));
	mongooseConnection.on('error', () => console.log(`mongodb error: ${mongooseConnection.host}`));
	mongooseConnection.on('fullsetup', () => console.log(`fullsetup: ${mongooseConnection.host}`));
	mongooseConnection.on('all', () => console.log(`all: ${mongooseConnection.host}`));
	mongooseConnection.on('reconnectFailed', () => console.log(`reconnectFailed: ${mongooseConnection.host}`));
	return mongooseConnection.asPromise();
}