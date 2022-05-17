import { APIGatewayProxyEvent } from 'aws-lambda';
import { validate, parseErrors } from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const validatorMiddleware = async (schema: object) => (event: APIGatewayProxyEvent) => {
	const valid = validate(schema);
	const data = event.body ? JSON.parse(event.body) : {};
	if (!valid(data)) {
		const errors = parseErrors(valid.errors);
		sendError(TypeErrorMessage.VALIDATION, errors)
	}
};