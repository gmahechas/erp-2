import mongoose from 'mongoose';
import { IMongodbConnectArgs } from './mongodb';

export type mongodbConnectionMode = 'connect' | 'createConnection';

export interface IConnectToMongo {
	(
		mongodbConnectArgs: IMongodbConnectArgs,
		mode: mongodbConnectionMode,
		registerModelFunc?: Array<(connection: mongoose.Connection | mongoose.Mongoose) => void>): Promise<void>;
}
