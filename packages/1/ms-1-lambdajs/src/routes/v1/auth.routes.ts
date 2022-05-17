import { signinAuthSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, validatorMiddleware } from '@gmahechas/erp-common-lambdajs';
import { signinAuth } from '@gmahechas/erp-common-ms-1-js';

export const authRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/signin',
		args: ['body'],
		action: signinAuth,
		middlewares: [validatorMiddleware(signinAuthSchema)],
	}
];