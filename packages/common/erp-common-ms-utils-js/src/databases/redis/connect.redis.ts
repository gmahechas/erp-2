import { RedisClientType } from 'redis/dist/lib/client';
import { redisCreateClient } from './client.redis';
import { IConnectToRedis } from './redis.interface';

let connections: { url: string, client: RedisClientType<{}, {}> }[] = [];

export const connectToRedis: IConnectToRedis = async (url: string) => {
	const connection = connections.find(connection => connection.url === url);
	if (connection == undefined) {
		const client = redisCreateClient(url)
		await client.connect();
		connections.push({ url, client });
		return client;
	} else {
		return connection.client;
	}
}