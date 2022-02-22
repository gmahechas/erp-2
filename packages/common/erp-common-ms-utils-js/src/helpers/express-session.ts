import connectRedis from 'connect-redis';
import expressSession from 'express-session';
import { connectToRedis } from '../databases/redis/connect.redis';

export const session = async (url: string, sessionOptions: expressSession.SessionOptions) => {
	const RedisStore = connectRedis(expressSession);
	const client = await connectToRedis(url, true);
	return expressSession({
		store: new RedisStore({ client }),
		...sessionOptions
	});
};