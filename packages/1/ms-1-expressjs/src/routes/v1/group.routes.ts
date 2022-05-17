import { iresponse, createOneGroupSchema, updateOneGroupSchema, deleteOneGroupSchema, searchOneGroupSchema, searchManyGroupSchema } from '@gmahechas/erp-common';
import { express, authenticationMiddleware, validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneGroup, updateOneGroup, deleteOneGroup, searchOneGroup, searchManyGroup } from '@gmahechas/erp-common-ms-1-js';

const router = express.Router();

router.post('/create/one', authenticationMiddleware, validatorMiddleware(createOneGroupSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', authenticationMiddleware, validatorMiddleware(updateOneGroupSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', authenticationMiddleware, validatorMiddleware(deleteOneGroupSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', authenticationMiddleware, validatorMiddleware(searchOneGroupSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', authenticationMiddleware, validatorMiddleware(searchManyGroupSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyGroup(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const groupRouter = router;