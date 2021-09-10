import mongoose from 'mongoose';

type mongodbConnectionMode = 'connect' | 'createConnection';
interface IMongodbConnectArgs {
	uri?: string;
	connectOptions?: mongoose.ConnectOptions;
}

export interface IMongodbConnect {
	(uri: string, connectOptions?: mongoose.ConnectOptions): Promise<mongoose.Mongoose> | Promise<mongoose.Connection>
}

export interface IConnectToMongo {
	(
		mongodbConnectArgs: IMongodbConnectArgs,
		mode: mongodbConnectionMode,
		registerModelFunc?: Array<(connection: mongoose.Connection | mongoose.Mongoose) => void>
	): Promise<void>;
}

export { mongoose };