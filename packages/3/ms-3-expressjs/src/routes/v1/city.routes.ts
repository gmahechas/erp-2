import {
  iresponse,
  createOneCitySchema,
  updateOneCitySchema,
  deleteOneCitySchema,
  searchOneCitySchema,
  searchManyCitySchema,
} from '@gmahechas/erp-common-js';
import {
  express,
  authenticationMiddleware,
  validatorMiddleware,
  loggerMiddleware,
} from '@gmahechas/erp-common-expressjs';
import {
  createOneCity,
  updateOneCity,
  deleteOneCity,
  searchOneCity,
  searchManyCity,
} from '@gmahechas/erp-common-ms-3-js';

const router = express.Router();

router.post(
  '/create/one',
  authenticationMiddleware,
  validatorMiddleware(createOneCitySchema),
  loggerMiddleware,
  async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    const data = await createOneCity(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.put(
  '/update/one',
  authenticationMiddleware,
  validatorMiddleware(updateOneCitySchema),
  loggerMiddleware,
  async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    const data = await updateOneCity(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.delete(
  '/delete/one',
  authenticationMiddleware,
  validatorMiddleware(deleteOneCitySchema),
  loggerMiddleware,
  async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    const data = await deleteOneCity(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.post(
  '/search/one',
  authenticationMiddleware,
  validatorMiddleware(searchOneCitySchema),
  loggerMiddleware,
  async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    const data = await searchOneCity(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

router.post(
  '/search/many',
  authenticationMiddleware,
  validatorMiddleware(searchManyCitySchema),
  loggerMiddleware,
  async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    const data = await searchManyCity(request.body);
    const { statusCode, body } = iresponse(200, data);
    response.status(statusCode).send(body);
  },
);

export const cityRouter = router;
