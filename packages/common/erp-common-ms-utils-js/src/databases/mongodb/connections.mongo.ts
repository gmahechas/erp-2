import mongosee from 'mongoose';
import { ConnectDbError, sendError, TypeErrorMessage } from '../../errors';
import { IMongodbConnect } from './mongo.interface';

export const mongodbConnect: IMongodbConnect = (uri, connectOptions) => {
	mongosee.connect(uri, connectOptions);
	const mongooseConnection = mongosee.connection;
	mongooseConnection.on('connecting', () => console.log(`connecting to mongodb`));
	mongooseConnection.on('connected', () => console.log(`mongodb connected to: ${mongooseConnection.host}:${mongooseConnection.port}/${mongooseConnection.name}`));
	mongooseConnection.on('disconnecting', () => console.log(`disconnecting mongodb`));
	mongooseConnection.on('disconnected', () => console.log(`mongodb disconnected`));
	mongooseConnection.on('close', () => console.log(`mongodb connection closed`))
	mongooseConnection.on('reconnected', () => console.log(`mongodb reconnected`));
	mongooseConnection.on('error', () => sendError(TypeErrorMessage.DB_CONNECTION));
	mongooseConnection.on('fullsetup', () => console.log(`fullsetup`));
	mongooseConnection.on('all', () => console.log(`all`));
	mongooseConnection.on('reconnectFailed', () => console.log(`reconnectFailed`));
	return mongooseConnection.asPromise();
}

export const mongodbCreateConnection: IMongodbConnect = (uri, connectOptions) => {
	const mongooseConnection = mongosee.createConnection(uri, connectOptions);
	mongooseConnection.on('connecting', () => console.log(`connecting to mongodb`));
	mongooseConnection.on('connected', () => console.log(`mongodb connected to: ${mongooseConnection.host}:${mongooseConnection.port}/${mongooseConnection.name}`));
	mongooseConnection.on('disconnecting', () => console.log(`disconnecting mongodb`));
	mongooseConnection.on('disconnected', () => console.log(`mongodb disconnected`));
	mongooseConnection.on('close', () => console.log(`mongodb mongooseConnection closed`));
	mongooseConnection.on('reconnected', () => console.log(`mongodb reconnected`));
	mongooseConnection.on('error', () => sendError(TypeErrorMessage.DB_CONNECTION));
	mongooseConnection.on('fullsetup', () => console.log(`fullsetup`));
	mongooseConnection.on('all', () => console.log(`all`));
	mongooseConnection.on('reconnectFailed', () => console.log(`reconnectFailed`));
	return mongooseConnection.asPromise();
}