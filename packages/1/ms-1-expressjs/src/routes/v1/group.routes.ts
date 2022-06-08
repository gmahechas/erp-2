import { iresponse, createOneGroupSchema, updateOneGroupSchema, deleteOneGroupSchema, searchOneGroupSchema, searchManyGroupSchema } from '@gmahechas/erp-common-js';
import { express, authenticationMiddleware, validatorMiddleware, loggerMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneGroup, updateOneGroup, deleteOneGroup, searchOneGroup, searchManyGroup } from '@gmahechas/erp-common-ms-1-js';

const router = express.Router();

router.post('/create/one', authenticationMiddleware, validatorMiddleware(createOneGroupSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', authenticationMiddleware, validatorMiddleware(updateOneGroupSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', authenticationMiddleware, validatorMiddleware(deleteOneGroupSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', authenticationMiddleware, validatorMiddleware(searchOneGroupSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', authenticationMiddleware, validatorMiddleware(searchManyGroupSchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const groupRouter = router;