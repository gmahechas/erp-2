import mongoose from 'mongoose';

export { mongoose };

export interface IMongodbConnectArgs {
	uri?: string;
	connectOptions?: mongoose.ConnectOptions;
}

export interface IMongodbConnect {
	(uri: string, connectOptions?: mongoose.ConnectOptions): Promise<mongoose.Mongoose> | Promise<mongoose.Connection>
}

export type mongodbConnectionMode = 'connect' | 'createConnection';

export interface IConnectToMongo {
	(
		mongodbConnectArgs: IMongodbConnectArgs,
		mode: mongodbConnectionMode,
		registerModelFunc?: Array<(connection: mongoose.Connection | mongoose.Mongoose) => void>
	): Promise<void>;
}