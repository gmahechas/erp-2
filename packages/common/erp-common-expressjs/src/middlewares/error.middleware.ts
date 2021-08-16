import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@gmahechas/erp-common';

export const errorMiddleware = (error: Error, request: Request, response: Response, next: NextFunction) => {
	if (error instanceof CustomError) {
		return response.status(error.statusCode).send({ body: null, error: error.serializeErrors() });
	}
	response.status(500).send({ body: null, error: 'Something went wrong' });
};