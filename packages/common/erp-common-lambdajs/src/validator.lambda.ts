import { ValidationError, parseErrors } from '@gmahechas/erp-common';

export const validatorLambda: any = (valid: any, body: object) => {
	if (!valid(body)) {
		const errors = parseErrors(valid.errors);
		throw new ValidationError(errors);
	}
};
