import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@gmahechas/erp-common-ms-utils-js';

export const errorMiddleware = (error: Error, request: Request, response: Response, next: NextFunction) => {
	if (error instanceof CustomError) {
		return response.status(error.statusCode).send({ data: null, error: error.serializeErrors() });
	}
	response.status(500).send({ data: null, error: 'Something went wrong' });
};