import { iresponse, signinAuthSchema } from '@gmahechas/erp-common-js';
import { express, validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { signinAuth } from '@gmahechas/erp-common-ms-1-js';

const router = express.Router();

router.post(
  '/signin',
  validatorMiddleware(signinAuthSchema),
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const data = await signinAuth(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

export const authRouter = router;
