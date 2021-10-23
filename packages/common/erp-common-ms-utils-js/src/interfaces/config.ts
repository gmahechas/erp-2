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
			command?: {
				url?: string;
				databases?: {
					mongo?: {
						uri?: string;
					}
				}
			};
			query?: {
				url?: string;
				databases?: {
					mongo?: {
						uri?: string;
					}
				}
			}
		}
		three?: {
			command?: {
				url?: string;
				databases?: {
					mongo?: {
						uri?: string;
					}
				}
			};
			query?: {
				url?: string;
				databases?: {
					mongo?: {
						uri?: string;
					}
				}
			}
		}
	}
}