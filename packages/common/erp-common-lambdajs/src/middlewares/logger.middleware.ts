import { APIGatewayProxyEvent } from 'aws-lambda';
import { Context, Winston } from '@gmahechas/erp-common-ms-utils-js';

export const loggerMiddleware = async (event: APIGatewayProxyEvent) => {
  const auth = Context.get('auth');
  const { body, path, httpMethod, pathParameters, queryStringParameters } =
    event;
  Winston.logger.info('logger', {
    requestId: Context.get('requestId'),
    auth: JSON.stringify(auth),
    action: path,
    method: httpMethod,
    payload: JSON.stringify({
      body,
      params: pathParameters,
      query: queryStringParameters,
    }),
  });
};
