import { iresponse } from '@gmahechas/erp-common';
import { initEnv } from '@gmahechas/erp-common-ms-utils-js';

import { routerLambda } from './helpers/router.lambda';
import { actionArgs } from './helpers/action-args';
import { validatorLambda } from './helpers/validator.lambda';
import { responseLambda } from './helpers/response.lambda';
import { errorHandlerLambda } from './helpers/error-handler.lambda';
import { IHandlerLambda } from './helpers/handler-lambda.interface';

export const handlerLambda: IHandlerLambda = (routes, connectDatabases) => async (event, context) => {
	try {
		await initEnv(false);
		const { args, validation, action } = routerLambda(event, routes);
		const actionParams = actionArgs(args, event);
		validatorLambda(validation, actionParams);
		await connectDatabases();
		const data = await action(actionParams);
		const response = iresponse(200, data);
		return responseLambda(response);
	} catch (error) {
		return errorHandlerLambda(error);
	}
}