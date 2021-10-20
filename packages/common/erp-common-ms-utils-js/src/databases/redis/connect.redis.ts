import { RedisClient } from 'redis';
import { createRedisClient } from './client.redis';
import { IConnectToRedis } from './redis.interface';

let connections: { url: string, client: RedisClient }[] = [];

export const connectToRedis: IConnectToRedis = async (url) => {
	const connection = connections.find(connection => connection.url === url)
	if (connection == undefined) {
		const client = await createRedisClient(url)
		connections.push({ url, client });
		return client;
	} else {
		return connection.client;
	}
}