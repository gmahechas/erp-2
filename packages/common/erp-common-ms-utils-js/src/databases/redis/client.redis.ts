import { createClient, RedisClient } from 'redis';

export const createRedisClient = (url: string): Promise<RedisClient> => {
	return new Promise((resolve, reject) => {
		const client = createClient({ url });
		client.on('error', (error) => {
			console.error(`redis error in: ${url}`)
			reject(error);
		} );
		client.on('connect', () => {
			console.info(`redis connected to: ${url}`);
			resolve(client);
		});
	})
}