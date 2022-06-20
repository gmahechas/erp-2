import { JSONSchemaType } from 'ajv';
import { ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from './user.dto';

export const createOneUserSchema: JSONSchemaType<ICreateUser> = {
	type: 'object',
	properties: {
		userName: { type: 'string' },
		userPassword: { type: 'string' },
		groups: { type: 'array', items: { type: 'string' } },
		policies: { type: 'array', items: { type: 'string' } },
	},
	required: ['userName', 'userPassword'],
	additionalProperties: false,
};

export const updateOneUserSchema: JSONSchemaType<IUpdateUser> = {
	type: 'object',
	properties: {
		userId: { type: 'string' },
		userName: { type: 'string' },
		userPassword: { type: 'string' },
		groups: { type: 'array', items: { type: 'string' } },
		policies: { type: 'array', items: { type: 'string' } },
	},
	required: ['userId'],
	additionalProperties: false,
};

export const deleteOneUserSchema: JSONSchemaType<IDeleteUser> = {
	type: 'object',
	properties: {
		userId: { type: 'string' },
	},
	required: ['userId'],
	additionalProperties: false,
};

export const searchOneUserSchema: JSONSchemaType<ISearchUser> = {
	type: 'object',
	properties: {
		userId: { type: 'string' },
		userName: { type: 'string' },
	},
	required: [],
	additionalProperties: false
};

export const searchManyUserSchema: JSONSchemaType<ISearchUser[]> = {
	type: 'array',
	items: searchOneUserSchema
};