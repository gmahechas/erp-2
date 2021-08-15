import { Request, Response, NextFunction } from 'express';

export const requestMiddleware =  (request: Request, response: Response, next: NextFunction) => {
	request.irequest = ({
		headers: request.headers,
		body: request.body,
		params: request.params,
		query: request.query
	});
	next();
};