import { iresponse, createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema, searchManyCountrySchema } from '@gmahechas/erp-common';
import { express, authenticationMiddleware, validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneCompany, updateOneCompany, deleteOneCompany, searchOneCompany, searchManyCompany } from '@gmahechas/erp-common-ms-4-js';

const router = express.Router();

router.post('/create/one', authenticationMiddleware, validatorMiddleware(createOneCountrySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', authenticationMiddleware, validatorMiddleware(updateOneCountrySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', authenticationMiddleware, validatorMiddleware(deleteOneCountrySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', authenticationMiddleware, validatorMiddleware(searchOneCountrySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', authenticationMiddleware, validatorMiddleware(searchManyCountrySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const companyRouter = router;