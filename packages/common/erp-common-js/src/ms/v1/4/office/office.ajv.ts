import { JSONSchemaType } from 'ajv';
import { ICreateOffice, IDeleteOffice, ISearchOffice, IUpdateOffice } from './office.dto';

export const createOneOfficeSchema: JSONSchemaType<ICreateOffice> = {
	type: 'object',
	properties: {
		officeName: { type: 'string' },
		companyId: { type: 'string' },
	},
	required: ['officeName', 'companyId'],
	additionalProperties: false,
};

export const updateOneOfficeSchema: JSONSchemaType<IUpdateOffice> = {
	type: 'object',
	properties: {
		officeId: { type: 'string' },
		officeName: { type: 'string' },
		companyId: { type: 'string' },
	},
	required: ['officeId'],
	additionalProperties: false
};

export const deleteOneOfficeSchema: JSONSchemaType<IDeleteOffice> = {
	type: 'object',
	properties: {
		officeId: { type: 'string' }
	},
	required: ['officeId'],
	additionalProperties: false
};

export const searchOneOfficeSchema: JSONSchemaType<ISearchOffice> = {
	type: 'object',
	properties: {
		officeId: { type: 'string' },
		officeName: { type: 'string' },
		companyId: { type: 'string' },
	},
	required: [],
	additionalProperties: false
};

export const searchManyOfficeSchema: JSONSchemaType<ISearchOffice[]> = {
	type: 'array',
	items: searchOneOfficeSchema
};
