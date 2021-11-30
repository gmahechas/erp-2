import { JSONSchemaType } from 'ajv';
import { ISigninAuth } from './auth.dto';

export const signinAuthSchema: JSONSchemaType<ISigninAuth> = {
	type: 'object',
	properties: {
		companyKey: {	type: 'string' },
		userName: { type: 'string' },
		userPassword: { type: 'string' }
	},
	required: ['companyKey', 'userName', 'userPassword'],
	additionalProperties: false,
};