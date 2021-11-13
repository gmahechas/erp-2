import { iresponse } from '@gmahechas/erp-common';
import { initEnv } from '@gmahechas/erp-common-ms-utils-js';

import { routerLambda } from './router.lambda';
import { actionArgs } from './action-args';
import { validatorLambda } from './validator.lambda';
import { responseLambda } from './response.lambda';
import { errorHandlerLambda } from './error-handler.lambda';
import { IHandlerLambda } from '../interfaces/handler-lambda.interface';

export const handlerLambda: IHandlerLambda = (routes, connectDatabases) => async (event, context) => {
	try {
		await initEnv(false);
		const { args, validation, action } = routerLambda(event, routes);
		const actionParams = actionArgs(args, event);
		validatorLambda(validation, actionParams);
		context.callbackWaitsForEmptyEventLoop = false;
		await connectDatabases();
		const data = await action(actionParams);
		const response = iresponse(200, data);
		return responseLambda(response);
	} catch (error) {
		return errorHandlerLambda(error);
	}
}