export interface IConfig {
	environment: string;
	app?: {
		port?: string;
	};
	ms?: {
		zero?: {
			session?: {
				redis?: {
					url?: string;
				}
			};
		}
		one?: {
			url?: string;
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
		three?: {
			url?: string;
			databases?: {
				mongo?: {
					uri?: string;
				}
			};
		},
		four?: {
			url?: string;
			databases?: {
				mongo?: {
					uri?: string;
				}
			}
		}
	}
}