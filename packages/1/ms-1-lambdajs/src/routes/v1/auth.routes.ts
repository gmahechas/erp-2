import { signinAuthSchema } from '@gmahechas/erp-common-js'
import { httpMethods, IRouteLambda, validatorMiddleware } from '@gmahechas/erp-common-lambdajs';
import { signinAuth } from '@gmahechas/erp-common-ms-1-js';

export const authRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/signin',
		middlewares: [validatorMiddleware(signinAuthSchema)],
		args: ['body'],
		action: signinAuth,
		statusCode: 200,
	}
];