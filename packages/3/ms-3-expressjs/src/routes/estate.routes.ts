import { createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema, iresponse } from '@gmahechas/erp-common';
import { express, validatorMiddleware, asyncHandler } from '@gmahechas/erp-common-expressjs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js';;

const router = express.Router();

router.post('/create/one', validatorMiddleware(createOneEstateSchema), asyncHandler(async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await createOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

router.put('/update/one', validatorMiddleware(updateOneEstateSchema), asyncHandler(async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await updateOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

router.delete('/delete/one', validatorMiddleware(deleteOneEstateSchema), asyncHandler(async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await deleteOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

router.post('/search/one', validatorMiddleware(searchOneEstateSchema), asyncHandler(async (request: express.Request, response: express.Response, next: express.NextFunction) => {
	const data = await searchOneEstate(request.body);
	const { statusCode, body } = iresponse(200, data);
	response.status(statusCode).send(body);
}));

export default router;