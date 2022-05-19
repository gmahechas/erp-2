import { Request, Response, NextFunction } from 'express';
import { Winston, Context } from '@gmahechas/erp-common-ms-utils-js';

export const loggerMiddleware = async (request: Request, response: Response, next: NextFunction) => {
	const auth = Context.get('auth');
	const { body, originalUrl, method, params, query } = request;
	Winston.logger.info('logger', { auth, action: originalUrl, method, payload: { body, params, query } });
	next();
};