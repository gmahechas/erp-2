import { iresponse, createOnePolicySchema, updateOnePolicySchema, deleteOnePolicySchema, searchOnePolicySchema, searchManyPolicySchema } from '@gmahechas/erp-common';
import { express, authenticationMiddleware, validatorMiddleware, loggerMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOnePolicy, updateOnePolicy, deleteOnePolicy, searchOnePolicy, searchManyPolicy } from '@gmahechas/erp-common-ms-1-js';

const router = express.Router();

router.post('/create/one', authenticationMiddleware, validatorMiddleware(createOnePolicySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOnePolicy(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.put('/update/one', authenticationMiddleware, validatorMiddleware(updateOnePolicySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOnePolicy(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.delete('/delete/one', authenticationMiddleware, validatorMiddleware(deleteOnePolicySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOnePolicy(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/one', authenticationMiddleware, validatorMiddleware(searchOnePolicySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOnePolicy(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

router.post('/search/many', authenticationMiddleware, validatorMiddleware(searchManyPolicySchema), loggerMiddleware, async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchManyPolicy(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const policyRouter = router;