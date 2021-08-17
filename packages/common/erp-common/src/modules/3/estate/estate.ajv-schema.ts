import { JSONSchemaType } from 'ajv';
import { ICreateEstateInput, IUpdateEstateInput, IDeleteEstateInput, ISearchEstateInput } from './estate.input';

export const createOneEstateSchema: JSONSchemaType<ICreateEstateInput> = {
	type: 'object',
	properties: {
		estateName: { type: 'string' },
		estateCode: { type: 'string', minLength: 2, maxLength: 4 },
		countryId: { type: 'string' }
	},
	required: ['estateName', 'estateCode'],
	additionalProperties: false,
};

export const updateOneEstateSchema: JSONSchemaType<IUpdateEstateInput> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		estateName: { type: 'string' },
		estateCode: { type: 'string' },
		countryId: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const deleteOneEstateSchema: JSONSchemaType<IDeleteEstateInput> = {
	type: 'object',
	properties: {
		id: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const searchOneEstateSchema: JSONSchemaType<ISearchEstateInput> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		estateName: { type: 'string' },
		estateCode: { type: 'string' },
		countryId: { type: 'string' }
	},
	required: [],
	additionalProperties: false
};