import { CustomError, IResponse, iresponse } from '@gmahechas/erp-common';
import { responseLambda } from './response.lambda';

export const errorHandlerLambda = (error: Error) => {
	let response: IResponse;
	if (error instanceof CustomError) {
		response = iresponse(error.statusCode, null, error.serializeErrors());
	} else {
		response = iresponse(500, null, 'Something went wrong');
	}
	return responseLambda(response);
}