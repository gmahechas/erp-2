import { JSONSchemaType } from 'ajv';
import { ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from './user.dto';

export const createOneUserSchema: JSONSchemaType<ICreateUser> = {
	type: 'object',
	properties: {
		userName: { type: 'string' },
		userPassword: { type: 'string' },
		personId: { type: 'string' }
	},
	required: ['userName', 'userPassword', 'personId'],
	additionalProperties: false,
};

export const updateOneUserSchema: JSONSchemaType<IUpdateUser> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		userName: { type: 'string' },
		userPassword: { type: 'string' },
		personId: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false,
};

export const deleteOneUserSchema: JSONSchemaType<IDeleteUser> = {
	type: 'object',
	properties: {
		id: { type: 'string' }
	},
	required: ['id'],
	additionalProperties: false,
};

export const searchOneUserSchema: JSONSchemaType<ISearchUser> = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		userName: { type: 'string' },
		personId: { type: 'string' }
	},
	required: [],
	additionalProperties: false
};

export const searchManyUserSchema: JSONSchemaType<ISearchUser[]> = {
	type: 'array',
	items: searchOneUserSchema
};