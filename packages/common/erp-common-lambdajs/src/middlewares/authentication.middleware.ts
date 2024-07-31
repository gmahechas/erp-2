import { APIGatewayProxyEvent } from 'aws-lambda';
import { IAuth } from '@gmahechas/erp-common-js';
import { Context, jwtDecode, sendError, TypeErrorMessage, Winston, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

export const authenticationMiddleware = async (event: APIGatewayProxyEvent) => {
  const requestId = (event.headers['X-Request-Id'] as string) || uuidv4();
  Context.set('requestId', requestId);
  const { Authorization: token } = event.headers;
  const { body, path, httpMethod, pathParameters, queryStringParameters } = event;
  if (!token) {
    Winston.logger.error(TypeErrorMessage.AUTHENTICATION, {
      requestId: Context.get('requestId'),
      auth: JSON.stringify(null),
      action: path,
      method: httpMethod,
      payload: JSON.stringify({
        body,
        params: pathParameters,
        query: queryStringParameters,
      }),
    });
    Context.clear();
    sendError(TypeErrorMessage.AUTHENTICATION);
  }
  const auth = jwtDecode(token) as IAuth;
  Context.set('token', token);
  Context.set('auth', auth);
};
