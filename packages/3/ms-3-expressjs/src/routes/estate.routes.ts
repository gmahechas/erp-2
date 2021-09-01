import express, { Request, Response } from 'express';
import { createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema, iresponse } from '@gmahechas/erp-common';
import { validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js';;

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneEstateSchema), async (request: Request, response: Response) => {
	const data = await createOneEstate({ estateName: 'Tolima', estateCode: 'CO', countryId: '1' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', validatorMiddleware(updateOneEstateSchema), async (request: Request, response: Response) => {
	const data = await updateOneEstate({ id: '1', estateName: 'Tolima', estateCode: 'CO', countryId: '1' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', validatorMiddleware(deleteOneEstateSchema), async (request: Request, response: Response) => {
	const data = await deleteOneEstate({ id: '1' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.get('/search/one', validatorMiddleware(searchOneEstateSchema), async (request: Request, response: Response) => {
	const data = await searchOneEstate({ id: '1', estateName: 'Tolima', estateCode: 'CO', countryId: '1' });
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});;


export default router;