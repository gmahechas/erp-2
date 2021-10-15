import { validate, createOneUserSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneUser } from '@gmahechas/erp-common-ms-1-js';

const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/1/user/create/one',
		args: ['body'],
		validation: validate(createOneUserSchema),
		action: createOneUser
	}
];

export default routes;