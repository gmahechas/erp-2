import { IContext } from '@gmahechas/erp-common-graphqljs';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const authorizationMiddleware = async (context: IContext) => {
	return context;
};