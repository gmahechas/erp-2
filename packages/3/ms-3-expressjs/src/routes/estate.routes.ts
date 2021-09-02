import express, { Request, Response } from 'express';
import { createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema, iresponse } from '@gmahechas/erp-common';
import { validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js';;

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneEstateSchema), async (request: Request, response: Response) => {
	const data = await createOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', validatorMiddleware(updateOneEstateSchema), async (request: Request, response: Response) => {
	const data = await updateOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', validatorMiddleware(deleteOneEstateSchema), async (request: Request, response: Response) => {
	const data = await deleteOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', validatorMiddleware(searchOneEstateSchema), async (request: Request, response: Response) => {
	const data = await searchOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export default router;