import { ConnectOptions, Schema, Document } from 'mongoose';

export { Schema, Document };

export interface IMongodbConnectArgs {
	uri: string;
	connectOptions?: ConnectOptions;
}

export interface IMongodbConnect {
	(uri: string, connectOptions?: ConnectOptions): Promise<void>
}
