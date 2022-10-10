import { APIGatewayProxyEvent } from 'aws-lambda';
import {
  Context,
  sendError,
  TypeErrorMessage,
  Winston,
} from '@gmahechas/erp-common-ms-utils-js';

export const authorizationMiddleware =
  async (scopes: string[]) => (event: APIGatewayProxyEvent) => {
    const auth = Context.get('auth');
    const { body, path, httpMethod, pathParameters, queryStringParameters } =
      event;
    const scope = JSON.parse(auth.scope);
    for (const capability of scopes) {
      const [service, actions] = capability.split(':');
      if (!scope[service]) {
        Winston.logger.error(TypeErrorMessage.AUTHORIZATION, {
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
        sendError(TypeErrorMessage.AUTHORIZATION);
      }
      for (const action of actions.split(',')) {
        if (!scope[service].includes(action)) {
          Winston.logger.error(TypeErrorMessage.AUTHORIZATION, {
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
          sendError(TypeErrorMessage.AUTHORIZATION);
        }
      }
    }
  };
