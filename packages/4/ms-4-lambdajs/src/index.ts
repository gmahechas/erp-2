import { iresponse } from '@gmahechas/erp-common-js';
import { env, initEnv, initWinston } from '@gmahechas/erp-common-ms-utils-js';
import {
  APIGatewayProxyEvent,
  Context,
  routerLambda,
  actionArgs,
  responseLambda,
  errorHandlerLambda,
  executeMiddlewares,
} from '@gmahechas/erp-common-lambdajs';
import { connectDatabases } from '@gmahechas/erp-common-ms-4-js';
import { routes } from './routes';

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  try {
    await initEnv(false);
    const { name } = env['ms-4']!.app!;
    await initWinston({ serviceName: name!, transports: ['console'] });
    const { args, action, middlewares } = routerLambda(event, routes);
    await executeMiddlewares(event, middlewares);
    context.callbackWaitsForEmptyEventLoop = false;
    await connectDatabases();
    const actionParams = actionArgs(args, event);
    const data = await action(actionParams);
    const response = iresponse(200, data);
    return responseLambda(response);
  } catch (error) {
    return errorHandlerLambda(error);
  }
};
