import { JSONSchemaType } from 'ajv';
import { ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from './estate.dto';

export const createOneEstateSchema: JSONSchemaType<ICreateEstate> = {
	type: 'object',
	properties: {
		estateName: { type: 'string' },
		estateCode: { type: 'string', minLength: 2, maxLength: 4 },
		countryId: { type: 'string' }
	},
	required: ['estateName', 'estateCode'],
	additionalProperties: false,
};

export const updateOneEstateSchema: JSONSchemaType<IUpdateEstate> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		estateName: { type: 'string' },
		estateCode: { type: 'string', minLength: 2, maxLength: 4 },
		countryId: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const deleteOneEstateSchema: JSONSchemaType<IDeleteEstate> = {
	type: 'object',
	properties: {
		id: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const searchOneEstateSchema: JSONSchemaType<ISearchEstate> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		estateName: { type: 'string' },
		estateCode: { type: 'string', minLength: 2, maxLength: 4 },
		countryId: { type: 'string' }
	},
	required: [],
	additionalProperties: false
};

export const searchManyEstateSchema: JSONSchemaType<ISearchEstate[]> = {
	type: 'array',
	items: searchOneEstateSchema
};