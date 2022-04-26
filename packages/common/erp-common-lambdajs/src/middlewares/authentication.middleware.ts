import { APIGatewayProxyEvent } from 'aws-lambda';
import { Context, jwtDecode, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { IAuth } from '@gmahechas/erp-common';

export const authenticationMiddleware = (event: APIGatewayProxyEvent) => {
	if (!event.path.includes('auth/signin')) {
		const { authorization: token } = event.headers;
		if (!token) {
			sendError(TypeErrorMessage.AUTHENTICATION);
		}
		const auth = jwtDecode(token) as IAuth;
		Context.set('token', token);
		Context.set('auth', auth);
	}
};