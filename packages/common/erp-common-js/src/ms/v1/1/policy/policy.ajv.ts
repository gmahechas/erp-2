import { JSONSchemaType } from 'ajv';
import { ICreatePolicy, IUpdatePolicy, IDeletePolicy, ISearchPolicy } from './policy.dto';

export const createOnePolicySchema: JSONSchemaType<ICreatePolicy> = {
	type: 'object',
	properties: {
		policyName: { type: 'string' },
		service: { type: 'string' },
		actions: { 
			type: 'array',
			items: { type: 'string' }
		},
	},
	required: ['policyName', 'service', 'actions'],
	additionalProperties: false,
};

export const updateOnePolicySchema: JSONSchemaType<IUpdatePolicy> = {
	type: 'object',
	properties: {
		policyId: { type: 'string' },
		policyName: { type: 'string' },
		service: { type: 'string' },
		actions: {
			type: 'array',
			items: { type: 'string' }
		},
	},
	required: ['policyId'],
	additionalProperties: false,
};

export const deleteOnePolicySchema: JSONSchemaType<IDeletePolicy> = {
	type: 'object',
	properties: {
		policyId: { type: 'string' },
	},
	required: ['policyId'],
	additionalProperties: false,
};

export const searchOnePolicySchema: JSONSchemaType<ISearchPolicy> = {
	type: 'object',
	properties: {
		policyId: { type: 'string' },
		policyName: { type: 'string' },
		service: { type: 'string' },
		actions: {
			type: 'array',
			items: { type: 'string' }
		},
	},
	required: [],
	additionalProperties: false
};

export const searchManyPolicySchema: JSONSchemaType<ISearchPolicy[]> = {
	type: 'array',
	items: searchOnePolicySchema
};