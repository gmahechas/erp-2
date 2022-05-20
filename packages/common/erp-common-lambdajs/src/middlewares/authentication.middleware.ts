import { APIGatewayProxyEvent } from 'aws-lambda';
import { IAuth } from '@gmahechas/erp-common';
import { Context, jwtDecode, sendError, TypeErrorMessage, Winston } from '@gmahechas/erp-common-ms-utils-js';

export const authenticationMiddleware = async (event: APIGatewayProxyEvent) => {
	const { Authorization: token } = event.headers;
	const { body, path, httpMethod, pathParameters, queryStringParameters } = event;
	if (!token) {
		Winston.logger.error(TypeErrorMessage.AUTHENTICATION, { auth: null, action: path, method: httpMethod, payload: { body, params: pathParameters, query: queryStringParameters } });
		sendError(TypeErrorMessage.AUTHENTICATION);
	}
	const auth = jwtDecode(token) as IAuth;
	Context.set('token', token);
	Context.set('auth', auth);
};