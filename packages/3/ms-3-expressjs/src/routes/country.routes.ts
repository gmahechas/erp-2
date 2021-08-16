import express, { Request, Response } from 'express';
import { createOneCountrySchema } from '@gmahechas/erp-common';
import { validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { getCountries } from '@gmahechas/erp-common-ms-3-js';

const router = express.Router();

router.post('/', validatorMiddleware(createOneCountrySchema), async (request: Request, response: Response) => {
	const { statusCode, body, error } = await getCountries(request.irequest);
	response.status(statusCode).send({ body, error });
});


export default router;