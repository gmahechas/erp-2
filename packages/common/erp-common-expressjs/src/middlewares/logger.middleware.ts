import { Request, Response, NextFunction } from 'express';
import { Winston, Context } from '@gmahechas/erp-common-ms-utils-js';

export const loggerMiddleware = async (request: Request, response: Response, next: NextFunction) => {
	const auth = Context.get('auth');
	const { body, originalUrl, method, params, query } = request;
	Winston.logger.info('logger', { auth: JSON.stringify(auth), action: originalUrl, method, payload: JSON.stringify({ body, params, query }) });
	next();
};