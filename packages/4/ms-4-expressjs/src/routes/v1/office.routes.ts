import {
  iresponse,
  createOneOfficeSchema,
  updateOneOfficeSchema,
  deleteOneOfficeSchema,
  searchOneOfficeSchema,
  searchManyOfficeSchema,
} from '@gmahechas/erp-common-js';
import { express, authenticationMiddleware, validatorMiddleware, loggerMiddleware } from '@gmahechas/erp-common-expressjs';
import {
  createOneOffice,
  updateOneOffice,
  deleteOneOffice,
  searchOneOffice,
  searchManyOffice,
} from '@gmahechas/erp-common-ms-4-js';

const router = express.Router();

router.post(
  '/create/one',
  authenticationMiddleware,
  validatorMiddleware(createOneOfficeSchema),
  loggerMiddleware,
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const data = await createOneOffice(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.put(
  '/update/one',
  authenticationMiddleware,
  validatorMiddleware(updateOneOfficeSchema),
  loggerMiddleware,
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const data = await updateOneOffice(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.delete(
  '/delete/one',
  authenticationMiddleware,
  validatorMiddleware(deleteOneOfficeSchema),
  loggerMiddleware,
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const data = await deleteOneOffice(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.post(
  '/search/one',
  authenticationMiddleware,
  validatorMiddleware(searchOneOfficeSchema),
  loggerMiddleware,
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const data = await searchOneOffice(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.post(
  '/search/many',
  authenticationMiddleware,
  validatorMiddleware(searchManyOfficeSchema),
  loggerMiddleware,
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const data = await searchManyOffice(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

export const officeRouter = router;
