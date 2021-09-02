import { estateGrpcService, errorHandlerGrpc } from '@gmahechas/erp-common-grpcjs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js'

export const estateService = {
	CreateOne: async (call, callback) => {
		try {
			const { id, estateName, estateCode, countryId } = call.request.entity!;
			const entity = await createOneEstate({ estateName, estateCode, countryId });
			callback(null, { entity });
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}
	},
	UpdateOne: async (call, callback) => {
		try {
			const { id, estateName, estateCode, countryId } = call.request.entity!;
			const entity = await updateOneEstate({ id, estateName, estateCode, countryId });
			callback(null, call.request);
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}

	},
	DeleteOne: async (call, callback) => {
		try {
			const { id, estateName, estateCode, countryId } = call.request.entity!;
			const entity = await deleteOneEstate({ id });
			callback(null, call.request);
		} catch (error) {
			errorHandlerGrpc(error, callback);
		}
	},
	SearchOne: async (call, callback) => {
		try {
			const { id, estateName, estateCode, countryId } = call.request.entity!;
			const entity = await searchOneEstate({ id, estateName, estateCode, countryId });
			callback(null, call.request);
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
} as estateGrpcService.EstateServiceHandlers;