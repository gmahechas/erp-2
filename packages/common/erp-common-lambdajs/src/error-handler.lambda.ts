import { CustomError, iresponse } from '@gmahechas/erp-common';

export const errorHandlerLambda = (error: Error) => {
	if (error instanceof CustomError) {
		return iresponse(error.statusCode, null, error.serializeErrors())
	}
	return iresponse(500, null, 'Something went wrong');
}