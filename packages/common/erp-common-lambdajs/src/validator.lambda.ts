import { ValidationError } from "@gmahechas/erp-common";

export const validatorLambda: any = (valid: any, body: object) => {
	if (!valid(body)) {
		throw new ValidationError(valid.errors);
	}
};
