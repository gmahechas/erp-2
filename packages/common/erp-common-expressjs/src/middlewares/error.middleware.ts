import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@gmahechas/erp-common';

export const errorMiddleware = (error: Error, request: Request, response: Response, next: NextFunction) => {

	if (error instanceof CustomError) {
		return response.status(400).send({ errors: error.serializeErrors() });
	}
	response.status(400).send({ body: null, error: 'Something went wrong' });
};