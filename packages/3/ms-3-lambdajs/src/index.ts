import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { iresponse } from '@gmahechas/erp-common';
import { routerLambda } from '@gmahechas/erp-common-lambdajs';
import routes from './routes';

exports.handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	try {
		const route = routerLambda(event, routes);

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