import { createClient } from 'redis';

export const createRedisClient = (url: string) => {
	const client = createClient({ url });
	client.on('error', () => console.error(`redis error in: ${url}`));
	client.on('connect', () => console.info(`redis connected to: ${url}`));
	return client;
}