import { JSONSchemaType } from 'ajv';
import { ICreateCompany, IDeleteCompany, ISearchCompany, IUpdateCompany } from './company.dto';

export const createOneCompanySchema: JSONSchemaType<ICreateCompany> = {
	type: 'object',
	properties: {
		companyName: { type: 'string' },
		companyIdentification: { type: 'string' },			
		companyKey: { type: 'string' },
		cityId: { type: 'string' },
	},
	required: ['companyName', 'companyIdentification', 'companyKey', 'cityId'],
	additionalProperties: false,
};

export const updateOneCompanySchema: JSONSchemaType<IUpdateCompany> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		companyName: { type: 'string' },
		companyIdentification: { type: 'string' },
		cityId: { type: 'string' },
	},
	required: ['id'],
	additionalProperties: false
};

export const deleteOneCompanySchema: JSONSchemaType<IDeleteCompany> = {
	type: 'object',
	properties: {
		id: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false
};

export const searchOneCompanySchema: JSONSchemaType<ISearchCompany> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		companyName: { type: 'string' },
		companyIdentification: { type: 'string' },
		companyKey: { type: 'string' },
		cityId: { type: 'string' },
	},
	required: [],
	additionalProperties: false
};

export const searchManyCompanySchema: JSONSchemaType<ISearchCompany[]> = {
	type: 'array',
	items: searchOneCompanySchema
};
