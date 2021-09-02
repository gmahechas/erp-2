import { countryGrpcService } from '@gmahechas/erp-common-grpcjs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js'

export const countryService = {
	CreateOne: async (call, callback) => {
		const { id, countryName, countryCode } = call.request.entity!;
		const entity = await createOneCountry({ countryName, countryCode });
		callback(null, { entity });
	},
	UpdateOne: async (call, callback) => {
		const { id, countryName, countryCode } = call.request.entity!;
		const entity = await updateOneCountry({ id, countryName, countryCode });
		callback(null, { entity });
	},
	DeleteOne: async (call, callback) => {
		const { id, countryName, countryCode } = call.request.entity!;
		const entity = await deleteOneCountry({ id });
		callback(null, { entity });
	},
	SearchOne: async (call, callback) => {
		const { id, countryName, countryCode } = call.request.entity!;
		const entity = await searchOneCountry({ id, countryName, countryCode });
		callback(null, { entity });
	},
	SearchMany: async (call, callback) => {
		const [...entities] = call.request.entities!;
		callback(null, { entities });
	}
} as countryGrpcService.CountryServiceHandlers;