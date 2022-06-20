import { iresponse, createOneCompanySchema, updateOneCompanySchema, deleteOneCompanySchema, searchOneCompanySchema, searchManyCompanySchema } from '@gmahechas/erp-common-js';
import { express, authenticationMiddleware, validatorMiddleware, loggerMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneCompany, updateOneCompany, deleteOneCompany, searchOneCompany, searchManyCompany } from '@gmahechas/erp-common-ms-4-js';

const router = express.Router();

router.post('/create/one', authenticationMiddleware, validatorMiddleware(createOneCompanySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', authenticationMiddleware, validatorMiddleware(updateOneCompanySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', authenticationMiddleware, validatorMiddleware(deleteOneCompanySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', authenticationMiddleware, validatorMiddleware(searchOneCompanySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', authenticationMiddleware, validatorMiddleware(searchManyCompanySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyCompany(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const companyRouter = router;