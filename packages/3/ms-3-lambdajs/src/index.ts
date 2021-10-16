import { handlerLambda } from '@gmahechas/erp-common-lambdajs';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { routes } from './routes';

export const handler = handlerLambda(routes, connectDatabases);