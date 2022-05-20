import { Logger, createLogger, format, transports } from 'winston';

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
			format: format.combine(
				format.timestamp(),
			),
			transports: [
				new transports.File({ filename: 'logs/app.log' }),
			],
			defaultMeta: { service },
			exitOnError: false,
		});
	}

}

export const initWinston = async (data: IWinston) => {
	Winston.init(data);
};