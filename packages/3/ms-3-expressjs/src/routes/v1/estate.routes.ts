import { iresponse, createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema, searchManyEstateSchema } from '@gmahechas/erp-common-js';
import { express, authenticationMiddleware, validatorMiddleware, loggerMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate, searchManyEstate } from '@gmahechas/erp-common-ms-3-js';

const router = express.Router();

router.post('/create/one', authenticationMiddleware, validatorMiddleware(createOneEstateSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', authenticationMiddleware, validatorMiddleware(updateOneEstateSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', authenticationMiddleware, validatorMiddleware(deleteOneEstateSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', authenticationMiddleware, validatorMiddleware(searchOneEstateSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', authenticationMiddleware, validatorMiddleware(searchManyEstateSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const estateRouter = router;