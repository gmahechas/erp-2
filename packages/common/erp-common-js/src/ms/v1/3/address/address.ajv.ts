import { JSONSchemaType } from 'ajv';
import { ICreateAddress, IUpdateAddress, IDeleteAddress, ISearchAddress } from './address.dto';

export const createOneAddressSchema: JSONSchemaType<ICreateAddress> = {
	type: 'object',
	properties: {
		addressLine1: { type: 'string' },
		addressLine2: { type: 'string' },
		addressZipCode: { type: 'string' },
		cityId: { type: 'string' }
	},
	required: ['addressLine1', 'addressLine2', 'addressZipCode', 'cityId'],
	additionalProperties: false,
};

export const updateOneAddressSchema: JSONSchemaType<IUpdateAddress> = {
	type: 'object',
	properties: {
		addressId: { type: 'string' },
		addressLine1: { type: 'string' },
		addressLine2: { type: 'string' },
		addressZipCode: { type: 'string' },
		cityId: { type: 'string' }
	},
	required: ['addressId'],
	additionalProperties: false
};

export const deleteOneAddressSchema: JSONSchemaType<IDeleteAddress> = {
	type: 'object',
	properties: {
		addressId: { type: 'string' }
	},
	required: ['addressId'],
	additionalProperties: false
};

export const searchOneAddressSchema: JSONSchemaType<ISearchAddress> = {
	type: 'object',
	properties: {
		addressId: { type: 'string' },
		addressLine1: { type: 'string' },
		addressLine2: { type: 'string' },
		addressZipCode: { type: 'string' },
		cityId: { type: 'string' }
	},
	required: [],
	additionalProperties: false
};

export const searchManyAddressSchema: JSONSchemaType<ISearchAddress[]> = {
	type: 'array',
	items: searchOneAddressSchema
};