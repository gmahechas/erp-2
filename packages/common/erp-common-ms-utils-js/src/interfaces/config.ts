export interface IConfig {
	environment: string;
	app: {
		port?: string;
	};
	databases?: {
		cqrs?: {
			mongo?: {
				command?: {
					uri?: string;
				},
				query?: {
					uri?: string;
				}
			}
		};
		session?: {
			redis?: {
				url?: string;
			}
		};
	};
}