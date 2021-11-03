import { iresponse, createOneUserSchema, updateOneUserSchema, deleteOneUserSchema, searchOneUserSchema, searchManyUserSchema } from '@gmahechas/erp-common';
import { express, validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser } from '@gmahechas/erp-common-ms-1-js';

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneUserSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneUser(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', validatorMiddleware(updateOneUserSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneUser(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', validatorMiddleware(deleteOneUserSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneUser(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', validatorMiddleware(searchOneUserSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneUser(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', validatorMiddleware(searchManyUserSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyUser(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const userRouter = router;