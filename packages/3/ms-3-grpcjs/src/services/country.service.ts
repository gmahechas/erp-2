import { createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema } from '@gmahechas/erp-common';
import { countryGrpcService, validatorGrpc, asyncHandlerUnaryGrpc } from '@gmahechas/erp-common-grpcjs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js'

export const countryService = {
	CreateOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(createOneCountrySchema, request);
		const data = await createOneCountry(request);
		callback(null, { data });
	}),
	UpdateOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(updateOneCountrySchema, request);
		const data = await updateOneCountry(request);
		callback(null, { data });
	}),
	DeleteOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(deleteOneCountrySchema, request);
		const data = await deleteOneCountry(request);
		callback(null, { data });
	}),
	SearchOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(searchOneCountrySchema, request);
		const data = await searchOneCountry(request);
		callback(null, { data });
	}),
	SearchMany: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request.data;
		callback(null, { data: request });
	})
} as countryGrpcService.CountryServiceHandlers;