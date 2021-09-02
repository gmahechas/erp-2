import { countryGrpcService, errorHandlerGrpc } from '@gmahechas/erp-common-grpcjs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js'

export const countryService = {
	CreateOne: async (call, callback) => {
		try {
			const { id, countryName, countryCode } = call.request.entity!;
			const entity = await createOneCountry({ countryName, countryCode });
			callback(null, { entity });
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}
	},
	UpdateOne: async (call, callback) => {
		try {
			const { id, countryName, countryCode } = call.request.entity!;
			const entity = await updateOneCountry({ id, countryName, countryCode });
			callback(null, { entity });
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}
	},
	DeleteOne: async (call, callback) => {
		try {
			const { id, countryName, countryCode } = call.request.entity!;
			const entity = await deleteOneCountry({ id });
			callback(null, { entity });
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}
	},
	SearchOne: async (call, callback) => {
		try {
			const { id, countryName, countryCode } = call.request.entity!;
			const entity = await searchOneCountry({ id, countryName, countryCode });
			callback(null, { entity });
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}
	},
	SearchMany: async (call, callback) => {
		try {
			const [...entities] = call.request.entities!;
			callback(null, { entities });
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}
	}
} as countryGrpcService.CountryServiceHandlers;