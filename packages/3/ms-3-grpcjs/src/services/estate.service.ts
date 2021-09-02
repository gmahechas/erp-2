import { estateGrpcService } from '@gmahechas/erp-common-grpcjs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js'

export const estateService = {
	CreateOne: async (call, callback) => {
		const { id, estateName, estateCode, countryId } = call.request.entity!;
		const entity = await createOneEstate({ estateName, estateCode, countryId });
		callback(null, { entity });
	},
	UpdateOne: async (call, callback) => {
		const { id, estateName, estateCode, countryId } = call.request.entity!;
		const entity = await updateOneEstate({ id, estateName, estateCode, countryId });
		callback(null, call.request);
	},
	DeleteOne: async (call, callback) => {
		const { id, estateName, estateCode, countryId } = call.request.entity!;
		const entity = await deleteOneEstate({ id });
		callback(null, call.request);
	},
	SearchOne: async (call, callback) => {
		const { id, estateName, estateCode, countryId } = call.request.entity!;
		const entity = await searchOneEstate({ id, estateName, estateCode, countryId });
		callback(null, call.request);
	},
	SearchMany: async (call, callback) => {
		const [...entities] = call.request.entities!;
		callback(null, { entities });
	}
} as estateGrpcService.EstateServiceHandlers;