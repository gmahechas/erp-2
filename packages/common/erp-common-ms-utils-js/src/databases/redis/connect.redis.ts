import { createRedisClient } from './client.redis';
import { ConnectDbError } from '../../errors/connect-db.error';
import { IConnectToRedis } from './redis.interface';

let connections: string[] = [];

export const connectToRedis: IConnectToRedis = async (url) => {
	const connection = connections.find(connection => connection === url)
	if (connection == undefined) {
		const client = createRedisClient(url)
		const redisConnection = await client.connect();
		connections.push(url);
		return redisConnection;
	}
}