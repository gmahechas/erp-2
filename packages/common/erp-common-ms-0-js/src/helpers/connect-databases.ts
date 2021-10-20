import { sendError, connectToRedis, env } from '@gmahechas/erp-common-ms-utils-js';

export const connectDatabases = async () => {
	const { databases } = env;
	if (
		!databases?.session?.redis?.url
	) {
		sendError('db_connection');
	}
	const { session: { redis: { url } }} = databases;
	await connectToRedis(url);
}