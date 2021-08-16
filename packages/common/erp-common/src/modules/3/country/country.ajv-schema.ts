import { JSONSchemaType } from 'ajv';
import { ICreateCountryInput, IDeleteCountryInput, ISearchCountryInput, IUpdateCountryInput } from './country.input';

export const createOneCountrySchema: JSONSchemaType<ICreateCountryInput> = {
	type: 'object',
	properties: {
		countryName: { type: 'string' },
		countryCode: { type: 'string', minLength: 2, maxLength: 4 }
	},
	required: ['countryName', 'countryCode'],
	additionalProperties: false,
};

export const updateOneCountrySchema: JSONSchemaType<IUpdateCountryInput> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		countryName: { type: 'string' },
		countryCode: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const deleteOneCountrySchema: JSONSchemaType<IDeleteCountryInput> = {
	type: 'object',
	properties: {
		id: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const searchOneCountrySchema: JSONSchemaType<ISearchCountryInput> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		countryName: { type: 'string' },
		countryCode: { type: 'string' }
	},
	required: [],
	additionalProperties: false
};
