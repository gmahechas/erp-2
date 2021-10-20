import { RedisClient } from 'redis';
export interface IConnectToRedis {
	(url: string): Promise<RedisClient>
}