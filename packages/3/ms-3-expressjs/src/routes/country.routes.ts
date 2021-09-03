import express, { Request, Response, NextFunction } from 'express';
import { createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema, iresponse, NotFoundError } from '@gmahechas/erp-common';
import { validatorMiddleware, asyncHandler } from '@gmahechas/erp-common-expressjs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js';

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneCountrySchema), asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
	const data = await createOneCountry(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

router.put('/update/one', validatorMiddleware(updateOneCountrySchema), asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
	const data = await updateOneCountry(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

router.delete('/delete/one', validatorMiddleware(deleteOneCountrySchema), asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
	const data = await deleteOneCountry(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

router.post('/search/one', validatorMiddleware(searchOneCountrySchema), asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
	const data = await searchOneCountry(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

export default router;