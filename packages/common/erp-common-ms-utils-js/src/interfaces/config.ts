export interface IConfig {
	environment: string;
	app: {
		port: string | undefined;
	};
	mongo: {
		command: {
			uri: string | undefined;
		};
		query: {
			uri: string | undefined;
		};
	};
}