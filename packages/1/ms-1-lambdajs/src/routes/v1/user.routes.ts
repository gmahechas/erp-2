import { validate, createOneUserSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneUser } from '@gmahechas/erp-common-ms-1-js';

export const userRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneUserSchema),
		action: createOneUser
	}
];