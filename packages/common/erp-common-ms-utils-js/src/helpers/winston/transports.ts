import { transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

export type TAvailableTransports = Array<'dailyRotateFile' | 'console'>;

const consoleTransport = new transports.Console();
const dailyRotateFileTransport = (serviceName: string) =>
  new DailyRotateFile({
    filename: `logs/${serviceName}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '64mb',
    maxFiles: '30d',
    format: format.combine(format.timestamp(), format.json()),
  });

export const initWinstonTransports = (
  serviceName: string,
  transports: TAvailableTransports,
) => {
  return transports.map((transport) => {
    switch (transport) {
      case 'console':
        return consoleTransport;
      case 'dailyRotateFile':
        return dailyRotateFileTransport(serviceName);
      default:
        throw new Error(`Unknown transport: ${transport}`);
    }
  });
};
