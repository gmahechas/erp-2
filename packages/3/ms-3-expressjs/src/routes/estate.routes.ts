import express, { Request, Response } from 'express';
import { createOneEstateSchema } from '@gmahechas/erp-common';
import { validatorMiddleware } from '@gmahechas/erp-common-expressjs';
import { getEstates } from '@gmahechas/erp-common-ms-3-js';

const router = express.Router();

router.post('/', validatorMiddleware(createOneEstateSchema), async (request: Request, response: Response) => {
	const { statusCode, body } = await getEstates(request.irequest);
	response.status(statusCode).send(body)
});


export default router;