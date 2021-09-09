import { sendUnaryData } from '@grpc/grpc-js';
import { CustomError, mongoose } from '@gmahechas/erp-common-ms-utils-js';

export const errorHandlerGrpc = (error: any | Error, callback: sendUnaryData<any>) => {
	if (error instanceof CustomError) {
		callback({ code: error.grpcStatusCode, message: JSON.stringify(error.serializeErrors()) });
	} else if (error instanceof mongoose.Error) {
		callback({ code: 2, message: JSON.stringify({ error: { type: 'database: Something went wrong :(' } }) });
	} else {
		callback({ code: 2, message: JSON.stringify({ error: { type: 'unknown: Something went wrong :(' } }) });
	}
}