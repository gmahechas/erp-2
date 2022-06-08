import { createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema } from '@gmahechas/erp-common-js';
import { estateGrpcService, validatorGrpc, asyncHandlerUnaryGrpc } from '@gmahechas/erp-common-grpcjs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js'

export const estateService = {
	CreateOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(createOneEstateSchema, request);
		const data = await createOneEstate(request);
		callback(null, { data });
	}),
	UpdateOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(updateOneEstateSchema, request);
		const data = await updateOneEstate(request);
		callback(null, { data });
	}),
	DeleteOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(deleteOneEstateSchema, request);
		const data = await deleteOneEstate(request);
		callback(null, { data });
	}),
	SearchOne: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request;
		validatorGrpc(searchOneEstateSchema, request);
		const data = await searchOneEstate(request);
		callback(null, { data });
	}),
	SearchMany: asyncHandlerUnaryGrpc(async (call, callback) => {
		const request = call.request.data;
		callback(null, { data: request });
	})
} as estateGrpcService.EstateServiceHandlers;