import { parseErrors } from '@gmahechas/erp-common';
import { ValidationError } from '@gmahechas/erp-common-ms-utils-js';

// TODO: ERP-4
export const validatorLambda: any = (valid: any, body: object) => {
	if (!valid(body)) {
		const errors = parseErrors(valid.errors);
		throw new ValidationError(errors);
	}
};
