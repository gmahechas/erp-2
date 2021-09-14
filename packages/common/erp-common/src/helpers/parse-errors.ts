import { ErrorObject } from 'ajv';
import { IError } from './error.interface';

export const parseErrors = (errors: ErrorObject[] | null | undefined): IError[] => {
	if(errors) {
		return errors.map((error: ErrorObject) => ({ field: error.instancePath, message: error.message }));
	} else {
		return [];
	}
}