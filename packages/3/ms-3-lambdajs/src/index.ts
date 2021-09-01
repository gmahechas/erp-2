import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { iresponse } from '@gmahechas/erp-common';
import { routerLambda, validatorLambda, responseLambda, errorHandlerLambda } from '@gmahechas/erp-common-lambdajs';
import routes from './routes';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
	try {
		const { httpMethod, path, pathParameters, queryStringParameters } = event;
		const body = (event.body) ? JSON.parse(event.body) : null;
		const route = routerLambda({ httpMethod, path }, routes);
		validatorLambda(route.validation, body);
		const data = await route.action(body);
		const response = iresponse(200, data);
		return responseLambda(response);
	} catch (error) {
		return errorHandlerLambda(error);
	}
}