import { parseErrors } from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const validatorLambda: any = (valid: any, body: object) => {
	if (!valid(body)) {
		const errors = parseErrors(valid.errors);
		sendError(TypeErrorMessage.VALIDATION, errors);
	}
};
