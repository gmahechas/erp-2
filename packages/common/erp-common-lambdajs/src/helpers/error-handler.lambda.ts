import { IResponse, iresponse } from '@gmahechas/erp-common';
import { CustomError, mongoose } from '@gmahechas/erp-common-ms-utils-js';
import { responseLambda } from './response.lambda';

export const errorHandlerLambda = (error: any | Error) => {
	let response: IResponse;
	if (error instanceof CustomError) {
		response = iresponse(error.statusCode, null, error.serializeErrors());
	} else if (error instanceof mongoose.MongooseError) {
		response = iresponse(500, null, { type: 'database: Something went wrong :(' });
	} else {
		response = iresponse(500, null, { type: 'unknown: Something went wrong :(' });
	}
	return responseLambda(response);
}