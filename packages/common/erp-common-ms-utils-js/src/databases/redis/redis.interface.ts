import { RedisClientType } from 'redis';

export interface IRedisCreateClient {
	(url: string, legacyMode: boolean): RedisClientType<{}, {}>
}

export interface IConnectToRedis {
	(url: string, legacyMode: boolean): Promise<RedisClientType<{}, {}>>
}