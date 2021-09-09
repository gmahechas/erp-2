import mongoose from 'mongoose';

export { mongoose };

export interface IMongodbConnectArgs {
	uri?: string;
	connectOptions?: mongoose.ConnectOptions;
}

export interface IMongodbConnect {
	(uri: string, connectOptions?: mongoose.ConnectOptions): Promise<mongoose.Mongoose> | Promise<mongoose.Connection>
}