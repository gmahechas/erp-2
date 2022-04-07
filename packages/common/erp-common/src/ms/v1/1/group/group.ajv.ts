import { JSONSchemaType } from 'ajv';
import { ICreateGroup, IUpdateGroup, IDeleteGroup, ISearchGroup } from './group.dto';

export const createOneGroupSchema: JSONSchemaType<ICreateGroup> = {
	type: 'object',
	properties: {
		groupName: { type: 'string' },
	},
	required: ['groupName'],
	additionalProperties: false,
};

export const updateOneGroupSchema: JSONSchemaType<IUpdateGroup> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		groupName: { type: 'string' },
	},
	required: ['id'],
	additionalProperties: false,
};

export const deleteOneGroupSchema: JSONSchemaType<IDeleteGroup> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
	},
	required: ['id'],
	additionalProperties: false,
};

export const searchOneGroupSchema: JSONSchemaType<ISearchGroup> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		groupName: { type: 'string' },
	},
	required: [],
	additionalProperties: false
};

export const searchManyGroupSchema: JSONSchemaType<ISearchGroup[]> = {
	type: 'array',
	items: searchOneGroupSchema
};