import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { iresponse } from '@gmahechas/erp-common';
import { routerLambda, actionArgs, validatorLambda, responseLambda, errorHandlerLambda } from '@gmahechas/erp-common-lambdajs';
import routes from './routes';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
	try {
		const { args, validation, action } = routerLambda(event, routes);
		const actionParams = actionArgs(args, event);
		validatorLambda(validation, actionParams);
		const data = await action(actionParams);
		const response = iresponse(200, data);
		return responseLambda(response);
	} catch (error) {
		return errorHandlerLambda(error);
	}
}