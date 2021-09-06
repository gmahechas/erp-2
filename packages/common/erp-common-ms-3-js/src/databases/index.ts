import { mongodb, ConnectDbError, IConnectDatabases, IMongodbConnectArgs } from '@gmahechas/erp-common-ms-utils-js';

export const connectDatabases: IConnectDatabases = async (mongodbConnectArgs) => {
	await initMongo(mongodbConnectArgs);
}

const initMongo = async (mongodbConnectArgs: IMongodbConnectArgs) => {
	const { uri, connectOptions } = mongodbConnectArgs;
	if (!uri) {
		throw new ConnectDbError();
	}
	await mongodb(
		uri,
		connectOptions
	);
}