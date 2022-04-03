interface IAppConfig {
	name?: string;
	port?: string;
	endpoint?: string;
}

export type envKeysType = 'ms-0' | 'ms-1' | 'ms-3' | 'ms-4';

export interface IConfig {
	environment?: string;
	'ms-0'?: {
		app?: IAppConfig;
		session?: {
			redis?: {
				url?: string;
			}
		};
		auth?: {
			jwt?: {
				publicKey?: string;
			}
		},
	}
	'ms-1'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: {
				uri?: string;
			}
		};
		auth?: {
			jwt?: {
				privateKey?: string;
				publicKey?: string;
			}
		},
	}
	'ms-3'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: {
				uri?: string;
			}
		};
		auth?: {
			jwt?: {
				publicKey?: string;
			}
		},
	},
	'ms-4'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: {
				uri?: string;
			}
		};
		auth?: {
			jwt?: {
				publicKey?: string;
			}
		},
	}
}