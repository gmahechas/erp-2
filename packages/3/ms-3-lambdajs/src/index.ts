import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { routerLambda, validatorLambda, responseLambda, errorHandlerLambda } from '@gmahechas/erp-common-lambdajs';
import routes from './routes';

exports.handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
	try {
		const { body, httpMethod, path } = event;
		const bodyParsed: any = body;
		const route = routerLambda({ httpMethod, path }, routes);
		validatorLambda(route.validation, JSON.parse(bodyParsed));
		const response = await route.action({ body: bodyParsed, params: event.pathParameters, query: event.queryStringParameters });
		return responseLambda(response);
	} catch (error) {
		return errorHandlerLambda(error);
	}
}