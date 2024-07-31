import { APIGatewayProxyEvent } from 'aws-lambda';
import { TLambdaMiddleware } from '../interfaces';

export const executeMiddlewares = async (event: APIGatewayProxyEvent, middlewares: Array<TLambdaMiddleware>) => {
  for (const middleware of middlewares) {
    await (
      await middleware
    )(event);
  }
};
