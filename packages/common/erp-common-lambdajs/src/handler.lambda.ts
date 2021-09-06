import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { iresponse } from '@gmahechas/erp-common'
import { routerLambda } from './utils/router.lambda';
import { actionArgs } from './utils/action-args';
import { validatorLambda } from './utils/validator.lambda';
import { responseLambda } from './utils/response.lambda';
import { errorHandlerLambda } from './utils/error-handler.lambda';
import { IRouteLambda } from './route.interface';

export const handlerLambda = (routes: IRouteLambda[], connectDatabases: () => Promise<any>) => async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
	try {
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