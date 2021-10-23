import { JSONSchemaType } from 'ajv';
import { ICreateCountry, IDeleteCountry, ISearchCountry, IUpdateCountry } from './country.dto';

export const createOneCountrySchema: JSONSchemaType<ICreateCountry> = {
	type: 'object',
	properties: {
		countryName: { type: 'string' },
		countryCode: { type: 'string', minLength: 2, maxLength: 4 }
	},
	required: ['countryName', 'countryCode'],
	additionalProperties: false,
};

export const updateOneCountrySchema: JSONSchemaType<IUpdateCountry> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		countryName: { type: 'string' },
		countryCode: { type: 'string', minLength: 2, maxLength: 4 }
	},
	required: ['id'],
	additionalProperties: false
};

export const deleteOneCountrySchema: JSONSchemaType<IDeleteCountry> = {
	type: 'object',
	properties: {
		id: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const searchOneCountrySchema: JSONSchemaType<ISearchCountry> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		countryName: { type: 'string' },
		countryCode: { type: 'string', minLength: 2, maxLength: 4 }
	},
	required: [],
	additionalProperties: false
};

export const searchManyCountrySchema: JSONSchemaType<ISearchCountry[]> = {
	type: 'array',
	items: searchOneCountrySchema
};
