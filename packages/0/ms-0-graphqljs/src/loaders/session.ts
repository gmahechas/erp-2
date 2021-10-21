import connectRedis from 'connect-redis';
import expressSession from 'express-session';
import { redis } from '@gmahechas/erp-common-ms-utils-js';

export const session = async () => {
	const RedisStore = connectRedis(expressSession);
	const client = redis.createClient('redis://10.1.0.229');
	client.on('error', () => console.error(`redis error`));
	client.on('connect', () => console.error(`redis connected`));
	return expressSession({
		store: new RedisStore({ client }),
		name: 'qid',
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