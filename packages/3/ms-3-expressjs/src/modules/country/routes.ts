import express, { Request, Response } from 'express';
import { createOneCountrySchema } from '@gmahechas/erp-common';
import { validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import * as fromCountryController from './controller';

const router = express.Router();

router.post('/', validatorMiddleware(createOneCountrySchema), async (request: Request, response: Response) => {
	const { statusCode, body } = await fromCountryController.getCountries(request.irequest);
	response.status(statusCode).send(body);
});


export default router;