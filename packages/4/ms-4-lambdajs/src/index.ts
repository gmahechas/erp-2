import { iresponse } from '@gmahechas/erp-common';
import { initEnv } from '@gmahechas/erp-common-ms-utils-js';
import { APIGatewayProxyEvent, Context, routerLambda, actionArgs, validatorLambda, responseLambda, errorHandlerLambda } from '@gmahechas/erp-common-lambdajs';
import { connectDatabases } from '@gmahechas/erp-common-ms-4-js';
import { routes } from './routes';

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
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