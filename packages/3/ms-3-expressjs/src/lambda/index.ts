import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { response, router } from '@gmahechas/erp-common-expressjs';
import routes from './routes';

exports.handler = async (event: APIGatewayProxyEvent) => {

	try {
		const route = router(event, routes);

		return route.action({
			headers: event.headers,
			body: event.body,
			params: event.pathParameters,
			query: event.queryStringParameters
		});
	} catch (error) {
		return response(400, null, 'error')
	}

}