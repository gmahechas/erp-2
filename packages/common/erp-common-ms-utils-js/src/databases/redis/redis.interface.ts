import { RedisClientType } from 'redis';

export interface IRedisCreateClient {
	(url: string, legacyMode: boolean): RedisClientType<any, any, any>
}

export interface IConnectToRedis {
	(url: string, legacyMode: boolean): Promise<RedisClientType<any, any, any> | undefined>
}