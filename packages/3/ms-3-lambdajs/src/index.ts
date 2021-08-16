import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { errorHandlerLambda, routerLambda, validatorLambda } from '@gmahechas/erp-common-lambdajs';
import routes from './routes';

exports.handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	try {
		const { body, httpMethod, path } = event;
		const bodyParsed: any = body;
		const route = routerLambda({ httpMethod, path }, routes);
		validatorLambda(route.validation, JSON.parse(bodyParsed));
		return route.action({
			body: event.body,
			params: event.pathParameters,
			query: event.queryStringParameters
		});
	} catch (error) {
		return errorHandlerLambda(error);
	}
}