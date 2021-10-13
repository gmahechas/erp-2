import { ConnectDbError, connectToRedis, env } from '@gmahechas/erp-common-ms-utils-js';

export let redisClient: any;

export const connectDatabases = async () => {
	const { databases } = env;
	if (!databases?.session?.redis?.url) {
		throw new ConnectDbError();
	}
	const { session: { redis: { url }} } = databases;
	redisClient = await connectToRedis(url);
}