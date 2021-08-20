import { countryGrpcService } from '@gmahechas/erp-common-grpcjs';

export const countryService = {
	CreateOne: (call, callback) => {
		callback(null, call.request);
	}
} as countryGrpcService.CountryServiceHandlers;