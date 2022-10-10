import { Logger, createLogger } from 'winston';
import { initWinstonTransports, TAvailableTransports } from './transports';

interface IWinston {
  serviceName: string;
  transports: TAvailableTransports;
}

export class Winston {
  private static _logger: Logger;

  static get logger() {
    if (!Winston._logger) {
      throw new Error('Can not get logger. Please call Winston.init() first.');
    }
    return Winston._logger;
  }

  static init = async ({ serviceName, transports }: IWinston) => {
    Winston._logger = createLogger({
      level: 'info',
      transports: initWinstonTransports(serviceName, transports),
      defaultMeta: { serviceName },
      exitOnError: false,
    });
  };
}

export const initWinston = async (data: IWinston) => {
  Winston.init(data);
};
