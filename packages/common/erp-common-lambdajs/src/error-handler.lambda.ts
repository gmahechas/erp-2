import { CustomError, iresponse } from '@gmahechas/erp-common';

export const errorHandlerLambda = (error: Error) => {

	if (error instanceof CustomError) {
		console.log(error.serializeErrors())
		return iresponse(400, null, error.serializeErrors())
	}
	return iresponse(500, null, 'Something went wrong');
}