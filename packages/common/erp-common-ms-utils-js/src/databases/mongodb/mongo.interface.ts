import { ConnectOptions, Schema, Document, Model, Connection } from 'mongoose';

export { Schema, Document, Model, Connection };

export interface IMongodbConnectArgs {
	uri?: string;
	connectOptions?: ConnectOptions;
}

export interface IMongodbConnect {
	(uri: string, connectOptions?: ConnectOptions): Promise<Connection>
}
