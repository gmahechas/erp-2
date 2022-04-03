import { iresponse, createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema, searchManyEstateSchema } from '@gmahechas/erp-common';
import { express, authenticationMiddleware, validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneOffice, updateOneOffice, deleteOneOffice, searchOneOffice, searchManyOffice } from '@gmahechas/erp-common-ms-4-js';

const router = express.Router();

router.post('/create/one', authenticationMiddleware, validatorMiddleware(createOneEstateSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneOffice(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', authenticationMiddleware, validatorMiddleware(updateOneEstateSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneOffice(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', authenticationMiddleware, validatorMiddleware(deleteOneEstateSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneOffice(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', authenticationMiddleware, validatorMiddleware(searchOneEstateSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneOffice(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', authenticationMiddleware, validatorMiddleware(searchManyEstateSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyOffice(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const officeRouter = router;