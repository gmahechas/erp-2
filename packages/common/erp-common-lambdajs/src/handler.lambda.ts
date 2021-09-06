import { iresponse } from '@gmahechas/erp-common'

import { routerLambda } from './utils/router.lambda';
import { actionArgs } from './utils/action-args';
import { validatorLambda } from './utils/validator.lambda';
import { responseLambda } from './utils/response.lambda';
import { errorHandlerLambda } from './utils/error-handler.lambda';
import { IHandlerLambda } from './utils/handler-lambda.interface';

export const handlerLambda: IHandlerLambda = (routes, connectDatabases, mongodbConnectArgs) => async (event, context) => {
	try {
		const { args, validation, action } = routerLambda(event, routes);
		const actionParams = actionArgs(args, event);
		validatorLambda(validation, actionParams);
		await connectDatabases(mongodbConnectArgs);
		const data = await action(actionParams);
		const response = iresponse(200, data);
		return responseLambda(response);
	} catch (error) {
		console.log('error', error);
		return errorHandlerLambda(error);
	}
}