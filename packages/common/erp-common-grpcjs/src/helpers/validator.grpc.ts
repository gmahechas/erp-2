import { validate, parseErrors } from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const validatorGrpc: any = (schema: object, body: object) => {
	const valid = validate(schema);
	if (!valid(body)) {
		const errors = parseErrors(valid.errors);
		sendError(TypeErrorMessage.VALIDATION, errors)
	}
}