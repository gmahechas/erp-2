import { parseErrors } from '@gmahechas/erp-common';
import { sendError } from '@gmahechas/erp-common-ms-utils-js';

// TODO: ERP-4
export const validatorLambda: any = (valid: any, body: object) => {
	if (!valid(body)) {
		const errors = parseErrors(valid.errors);
		sendError('validation', errors);
	}
};
