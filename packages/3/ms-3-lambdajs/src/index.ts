import { iresponse } from '@gmahechas/erp-common';
import { env, initEnv, initWinston } from '@gmahechas/erp-common-ms-utils-js';
import { APIGatewayProxyEvent, Context, routerLambda, actionArgs, validatorLambda, responseLambda, errorHandlerLambda, authenticationMiddleware } from '@gmahechas/erp-common-lambdajs';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { routes } from './routes';

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
	try {
		await initEnv(false);
		const { name } = env['ms-3']!.app!;
		await initWinston({ service: name! });
		const { args, validation, action } = routerLambda(event, routes);
		await authenticationMiddleware(event);
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