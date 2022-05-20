import { Logger, createLogger, transports } from 'winston';
import ecsFormat from '@elastic/ecs-winston-format';

interface IWinston {
	service: string
}

export class Winston {

	private static _logger: Logger;

	static get logger() {
		if (!Winston._logger) {
			throw new Error('Can not get logger. Please call Winston.init() first.');
		}
		return Winston._logger;
	}

	static init = async ({ service }: IWinston) => {
		Winston._logger = createLogger({
			level: 'info',
			format: ecsFormat(),
			transports: [
				new transports.File({ filename: 'logs/app.log' }),
			],
			defaultMeta: { "ms": service },
			exitOnError: false,
		});
	}

}

export const initWinston = async (data: IWinston) => {
	Winston.init(data);
};