import { APIGatewayProxyEvent } from 'aws-lambda';
import { Context, jwtDecode, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const authenticationMiddleware = (event: APIGatewayProxyEvent) => {
	if (!event.path.includes('auth/signin')) {
		const { authorization: token } = event.headers;
		if (!token) {
			sendError(TypeErrorMessage.AUTHENTICATION);
		}
		const auth = jwtDecode(token);
		Context.set('token', token);
		Context.set('auth', auth);
	}
};