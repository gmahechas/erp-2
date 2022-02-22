import connectRedis from 'connect-redis';
import expressSession from 'express-session';
import { env, sendError, TypeErrorMessage, connectToRedis } from '@gmahechas/erp-common-ms-utils-js';

export const session = async () => {
	if (!env['ms-0']?.session?.redis?.url) {
		sendError(TypeErrorMessage.CONFIG);
	}
	const RedisStore = connectRedis(expressSession);
	const client = await connectToRedis(env['ms-0'].session.redis.url, true);
	return expressSession({
		store: new RedisStore({ client }),
		name: 'cerp',
		secret: 'aslkdfjoiq12312',
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			secure: false,
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	});
};