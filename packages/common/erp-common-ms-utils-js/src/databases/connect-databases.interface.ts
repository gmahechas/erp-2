import { IMongodbConnectArgs } from './mongodb';

export interface IConnectDatabases {
	(mongodbConnectArgs: IMongodbConnectArgs): Promise<void>;
}
