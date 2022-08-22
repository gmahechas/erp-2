interface IAppConfig {
	name?: string;
	port?: string;
	endpoint?: string;
}

interface IMongoConfig {
	uri?: string;
}

interface IJwtConfig {
	privateKey?: string;
	publicKey?: string;
}

export type envKeysType = 'ms-0' | 'ms-1' | 'ms-3' | 'ms-4';

export interface IConfig {
	environment?: string;
	'ms-0'?: {
		app?: IAppConfig;
		session?: {
			redis?: {
				url?: string;
			},
			cookie_name?: string;
			cookie_secret?: string;
		};
		auth?: {
			jwt?: IJwtConfig
		},
	}
	'ms-1'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: IMongoConfig
		};
		auth?: {
			jwt?: IJwtConfig
		},
	}
	'ms-3'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: IMongoConfig
		};
		auth?: {
			jwt?: IJwtConfig
		},
	},
	'ms-4'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: IMongoConfig
		};
		auth?: {
			jwt?: IJwtConfig
		},
	}
}