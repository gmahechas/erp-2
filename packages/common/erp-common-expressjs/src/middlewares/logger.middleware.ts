import { Request, Response, NextFunction } from 'express';
import { createLogger, Logger, format, transports, Context } from '@gmahechas/erp-common-ms-utils-js';

const logger: Logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp(),
		format.logstash(),
	),
	transports: [
		new transports.File({ filename: 'logs/app.log' }),
	],
	exitOnError: false,
});

export const loggerMiddleware = async (request: Request, response: Response, next: NextFunction) => {
	const auth = Context.get('auth');
	const { body, originalUrl } = request;
	logger.info(JSON.stringify(body), { auth, action: originalUrl });
	next();
};