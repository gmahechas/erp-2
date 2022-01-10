interface IAppConfig {
	name?: string;
	port?: string;
	endpoint?: string;
}
export interface IConfig {
	environment?: string;
	'ms-0'?: {
		app?: IAppConfig;
		session?: {
			redis?: {
				url?: string;
			}
		};
	}
	'ms-1'?: {
		app?: IAppConfig;
		auth?: {
			jwt?: {
				privateKey?: string;
				publicKey?: string;
			}
		},
		databases?: {
			mongo?: {
				uri?: string;
			}
		};
	}
	'ms-3'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: {
				uri?: string;
			}
		};
	},
	'ms-4'?: {
		app?: IAppConfig;
		databases?: {
			mongo?: {
				uri?: string;
			}
		}
	}
}