import express, { Request, Response } from 'express';
import { createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema, iresponse } from '@gmahechas/erp-common';
import { validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js';

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneCountrySchema), async (request: Request, response: Response) => {
	const data = await createOneCountry({ countryName: 'Colombia', countryCode: 'CO' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', validatorMiddleware(updateOneCountrySchema), async (request: Request, response: Response) => {
	const data = await updateOneCountry({ id: '1', countryName: 'Colombia', countryCode: 'CO' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', validatorMiddleware(deleteOneCountrySchema), async (request: Request, response: Response) => {
	const data = await deleteOneCountry({ id: '1' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.get('/search/one', validatorMiddleware(searchOneCountrySchema), async (request: Request, response: Response) => {
	const data = await searchOneCountry({ id: '1', countryName: 'Colombia', countryCode: 'CO' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});


export default router;