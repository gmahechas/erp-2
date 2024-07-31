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
		companyId: { type: 'string' },
		companyName: { type: 'string' },
		companyIdentification: { type: 'string' },
		cityId: { type: 'string' },
	},
	required: ['companyId'],
	additionalProperties: false
};

export const deleteOneCompanySchema: JSONSchemaType<IDeleteCompany> = {
	type: 'object',
	properties: {
		companyId: { type: 'string' }
	},
	required: ['companyId'],
	additionalProperties: false
};

export const searchOneCompanySchema: JSONSchemaType<ISearchCompany> = {
	type: 'object',
	properties: {
		companyId: { type: 'string' },
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
