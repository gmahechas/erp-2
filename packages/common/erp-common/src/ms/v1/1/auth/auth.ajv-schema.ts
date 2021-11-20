import { JSONSchemaType } from 'ajv';
import { ISigninAuth } from './auth.dto';

export const signinAuthSchema: JSONSchemaType<ISigninAuth> = {
	type: 'object',
	properties: {
		userName: { type: 'string' },
		userPassword: { type: 'string' }
	},
	required: ['userName', 'userPassword'],
	additionalProperties: false,
};