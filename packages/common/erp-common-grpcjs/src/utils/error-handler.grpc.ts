import { sendUnaryData } from '@grpc/grpc-js';
import { CustomError } from '@gmahechas/erp-common';

export const errorHandlerGrpc = (error: any | Error, callback: sendUnaryData<any>) => {
	if (error instanceof CustomError) {
		callback({ code: error.grpcStatusCode, message: JSON.stringify(error.serializeErrors()) });
	} else {
		callback({ code: 2, message: 'Something went wrong' });
	}
}