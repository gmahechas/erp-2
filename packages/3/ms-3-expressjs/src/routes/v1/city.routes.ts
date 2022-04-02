import { iresponse, createOneCitySchema, updateOneCitySchema, deleteOneCitySchema, searchOneCitySchema, searchManyCitySchema } from '@gmahechas/erp-common';
import { express, validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneCity, updateOneCity, deleteOneCity, searchOneCity, searchManyCity } from '@gmahechas/erp-common-ms-3-js';

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneCitySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneCity(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', validatorMiddleware(updateOneCitySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneCity(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', validatorMiddleware(deleteOneCitySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneCity(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', validatorMiddleware(searchOneCitySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneCity(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', validatorMiddleware(searchManyCitySchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyCity(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const cityRouter = router;