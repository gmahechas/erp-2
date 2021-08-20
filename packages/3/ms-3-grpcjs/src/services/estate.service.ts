import { estateGrpcService } from '@gmahechas/erp-common-grpcjs';

export const estateService = {
	CreateOne: (call, callback) => {
		callback(null, call.request);
	}
} as estateGrpcService.EstateServiceHandlers;