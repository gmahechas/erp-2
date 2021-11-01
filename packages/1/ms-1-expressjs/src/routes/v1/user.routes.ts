import { iresponse, createOneUserSchema } from '@gmahechas/erp-common';
import { express, validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { createOneUser } from '@gmahechas/erp-common-ms-1-js';

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneUserSchema), async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneUser(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
});

export const userRouter = router;