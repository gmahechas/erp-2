import mongosee from 'mongoose';
import { IMongodbConnect } from './mongo.interface';

export const mongodbConnect: IMongodbConnect = (uri, connectOptions) => {
	mongosee.connect(uri, connectOptions);
	const mongooseConnection = mongosee.connection;
	mongooseConnection.on('connecting', () => console.log(`connecting to mongodb`));
	mongooseConnection.on('connected', () => console.log(`mongodb connected to: ${mongooseConnection.host}`));
	//mongooseConnection.on('open', () => console.log(`mongodb connection open`))
	mongooseConnection.on('disconnecting', () => console.log(`disconnecting mongodb`));
	mongooseConnection.on('disconnected', () => console.log(`mongodb disconnected`));
	mongooseConnection.on('close', () => console.log(`mongodb connection closed`))
	mongooseConnection.on('reconnected', () => console.log(`mongodb reconnected`));
	mongooseConnection.on('error', () => console.log(`mongodb error`));
	mongooseConnection.on('fullsetup', () => console.log(`fullsetup`));
	mongooseConnection.on('all', () => console.log(`all`));
	mongooseConnection.on('reconnectFailed', () => console.log(`reconnectFailed`));
	return mongooseConnection.asPromise();
}

export const mongodbCreateConnection: IMongodbConnect = (uri, connectOptions) => {
	const connection = mongosee.createConnection(uri, connectOptions);
	connection.on('connecting', () => console.log(`connecting to mongodb`))
	connection.on('connected', () => console.log(`mongodb connected to: ${connection.host}`))
	//connection.on('open', () => console.log(`mongodb connection open`))
	connection.on('disconnecting', () => console.log(`disconnecting mongodb`))
	connection.on('disconnected', () => console.log(`mongodb disconnected`))
	connection.on('close', () => console.log(`mongodb connection closed`))
	connection.on('reconnected', () => console.log(`mongodb reconnected`))
	connection.on('error', () => console.log(`mongodb error`))
	connection.on('fullsetup', () => console.log(`fullsetup`))
	connection.on('all', () => console.log(`all`))
	connection.on('reconnectFailed', () => console.log(`reconnectFailed`));
	return connection.asPromise();
}