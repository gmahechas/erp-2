import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { createOneCountrySchema, iresponse, validate } from '@gmahechas/erp-common';
import { routerLambda, validatorLambda } from '@gmahechas/erp-common-lambdajs';
import routes from './routes';

exports.handler = async (event: any): Promise<APIGatewayProxyResult> => {
	try {
		const body = JSON.parse(event.body);
		const route = routerLambda(event, routes);
		validatorLambda(route.validation, body);

		return route.action({
			headers: event.headers,
			body: event.body,
			params: event.pathParameters,
			query: event.queryStringParameters
		});
	} catch (error) {
		return iresponse(400, null, 'error')
	}
}