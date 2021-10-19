import { validate, parseErrors } from '@gmahechas/erp-common';
import { sendError } from '@gmahechas/erp-common-ms-utils-js';

// TODO: ERP-4
export const validatorGrpc: any = (schema: object, body: object) => {
	const valid = validate(schema);
	if (!valid(body)) {
		const errors = parseErrors(valid.errors);
		sendError('validation', errors)
	}
}