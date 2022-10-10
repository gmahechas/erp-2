import { APIGatewayProxyEvent } from 'aws-lambda';
import { match } from 'path-to-regexp';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { IRouteLambda } from '../interfaces/route.interface';

export const routerLambda = (event: APIGatewayProxyEvent, routes: IRouteLambda[]): IRouteLambda => {
  const route = routes.find((route) => {
    return event.httpMethod === route.httpMethod && match(route.path, { decode: decodeURIComponent })(event.path);
  });
  if (!route) {
    sendError(TypeErrorMessage.NOT_FOUND);
  }
  return route;
};
