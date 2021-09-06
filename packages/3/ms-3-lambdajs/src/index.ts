import { connectDatabases } from '@gmahechas/erp-common-ms-3-js'
import { handlerLambda } from '@gmahechas/erp-common-lambdajs';
import routes from './routes';

export const handler = handlerLambda(routes, connectDatabases);