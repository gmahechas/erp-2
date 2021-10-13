export interface IConnectToRedis {
	(url: string): Promise<void>
}