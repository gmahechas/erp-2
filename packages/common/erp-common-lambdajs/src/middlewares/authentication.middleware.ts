import { APIGatewayProxyEvent } from 'aws-lambda';
import { IAuth } from '@gmahechas/erp-common';
import { Context, jwtDecode, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const authenticationMiddleware = async (event: APIGatewayProxyEvent) => {
	const { Authorization: token } = event.headers;
	if (!token) {
		sendError(TypeErrorMessage.AUTHENTICATION);
	}
	const auth = jwtDecode(token) as IAuth;
	Context.set('token', token);
	Context.set('auth', auth);
};