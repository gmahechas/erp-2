import { RedisClientType } from 'redis/dist/lib/client';

export interface IRedisCreateClient {
	(url: string): RedisClientType<{}, {}>
}

export interface IConnectToRedis {
	(url: string): Promise<RedisClientType<{}, {}>>
}