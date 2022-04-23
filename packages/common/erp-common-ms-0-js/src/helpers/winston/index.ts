import { Logger, createLogger, transports, format } from '@gmahechas/erp-common-ms-utils-js';

const logger: Logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp(),
		format.logstash(),
	),
	transports: [
		new transports.File({ filename: 'logs/app.log'}),
	],
	defaultMeta: { service: 'ms-0' },
	exitOnError: false,
});


export const createLoggerChild = (scope: string) => {
	return logger.child({ scope });
}