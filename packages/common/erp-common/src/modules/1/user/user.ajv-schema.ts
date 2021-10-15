import { JSONSchemaType } from 'ajv';
import { ICreateUser} from './user.dto';

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