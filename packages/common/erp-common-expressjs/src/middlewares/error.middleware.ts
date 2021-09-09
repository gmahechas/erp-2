import { Request, Response, NextFunction } from 'express';
import { CustomError, mongoose } from '@gmahechas/erp-common-ms-utils-js';

export const errorMiddleware = (error: Error, request: Request, response: Response, next: NextFunction) => {
	if (error instanceof CustomError) {
		return response.status(error.statusCode).send({ data: null, error: error.serializeErrors() });
	} else if (error instanceof mongoose.Error) {
		return response.status(500).send({ data: null, error: { type: 'database: Something went wrong :(' } });
	}
	response.status(500).send({ data: null, error: { type: 'unknown: Something went wrong :(' } });
};