import { createClient } from 'redis';
import { IRedisCreateClient } from './redis.interface';

export const redisCreateClient: IRedisCreateClient = (url: string, legacyMode) => {
	const client = createClient({ url, legacyMode });
	//client.on('error', () => console.error(`redis error in: ${url}`));
	client.on('connect', () => console.info(`redis connected to: ${url}`));
	return client;
}