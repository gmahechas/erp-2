import { validate, signinAuthSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { signinAuth } from '@gmahechas/erp-common-ms-1-js';

export const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/signin',
		args: ['body'],
		validation: validate(signinAuthSchema),
		action: signinAuth
	}
];