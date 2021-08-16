import { ErrorObject } from 'ajv';

export interface IError {
	field: string;
	message?: string;
}

export const parseErrors = (errors: ErrorObject[] | null | undefined): IError[] => {
	if(errors) {
		return errors.map((error: ErrorObject) => ({ field: error.instancePath, message: error.message }));
	} else {
		return [];
	}
}