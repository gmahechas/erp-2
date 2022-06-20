import { JSONSchemaType } from 'ajv';
import { ICreateCity, IUpdateCity, IDeleteCity, ISearchCity } from './city.dto';

export const createOneCitySchema: JSONSchemaType<ICreateCity> = {
	type: 'object',
	properties: {
		cityName: { type: 'string' },
		cityCode: { type: 'string', minLength: 2, maxLength: 4 },
		estateId: { type: 'string' }
	},
	required: ['cityName', 'cityCode', 'estateId'],
	additionalProperties: false,
};

export const updateOneCitySchema: JSONSchemaType<IUpdateCity> = {
	type: 'object',
	properties: {
		cityId: { type: 'string' },
		cityName: { type: 'string' },
		cityCode: { type: 'string', minLength: 2, maxLength: 4 },
		estateId: { type: 'string' }
	},
	required: ['cityId'],
	additionalProperties: false
};

export const deleteOneCitySchema: JSONSchemaType<IDeleteCity> = {
	type: 'object',
	properties: {
		cityId: { type: 'string' }
	},
	required: ['cityId'],
	additionalProperties: false
};

export const searchOneCitySchema: JSONSchemaType<ISearchCity> = {
	type: 'object',
	properties: {
		cityId: { type: 'string' },
		cityName: { type: 'string' },
		cityCode: { type: 'string', minLength: 2, maxLength: 4 },
		estateId: { type: 'string' }
	},
	required: [],
	additionalProperties: false
};

export const searchManyCitySchema: JSONSchemaType<ISearchCity[]> = {
	type: 'array',
	items: searchOneCitySchema
};