import { IMongodbConnectArgs } from './mongodb';

export type mongodbConnectionMode = 'connect' | 'createConnection';

export interface IConnectDatabases {
	(mongodbConnectArgs: IMongodbConnectArgs, mode: mongodbConnectionMode): Promise<void>;
}
