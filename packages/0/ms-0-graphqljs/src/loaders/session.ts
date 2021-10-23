import connectRedis from 'connect-redis';
import expressSession from 'express-session';
import { env, redis, sendError } from '@gmahechas/erp-common-ms-utils-js';

export const session = async () => {
	if(!env.ms?.zero?.session?.redis?.url) {
		sendError('error_config');
	}
	const RedisStore = connectRedis(expressSession);
	const client = redis.createClient(env.ms.zero.session.redis.url);
	client.on('error', () => console.error(`redis error`));
	client.on('connect', () => console.error(`redis connected`));
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