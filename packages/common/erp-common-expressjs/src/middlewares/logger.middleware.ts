import { Request, Response, NextFunction } from 'express';
import { Winston, Context } from '@gmahechas/erp-common-ms-utils-js';

export const loggerMiddleware = async (request: Request, response: Response, next: NextFunction) => {
	const auth = Context.get('auth');
	const { body, originalUrl } = request;
	Winston.logger.info(JSON.stringify(body), { auth, action: originalUrl });
	next();
};