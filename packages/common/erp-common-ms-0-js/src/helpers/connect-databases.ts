import { sendError, connectToRedis, env } from '@gmahechas/erp-common-ms-utils-js';

export const connectDatabases = async () => {
	const { ms } = env;
	if (
		!ms?.zero?.session?.redis?.url
	) {
		sendError('db_connection');
	}
	const { zero: { session: { redis: { url } } } } = ms;
	await connectToRedis(url);
}