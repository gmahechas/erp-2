import { APIGatewayProxyEvent } from 'aws-lambda';
import { validate, parseErrors } from '@gmahechas/erp-common';
import { Context, sendError, TypeErrorMessage, Winston } from '@gmahechas/erp-common-ms-utils-js';

export const validatorMiddleware = async (schema: object) => (event: APIGatewayProxyEvent) => {
	const auth = Context.get('auth');
	const { body, path, httpMethod, pathParameters, queryStringParameters } = event;
	const valid = validate(schema);
	const data = event.body ? JSON.parse(event.body) : {};
	if (!valid(data)) {
		const errors = parseErrors(valid.errors);
		Winston.logger.error(TypeErrorMessage.VALIDATION, { auth, action: path, method: httpMethod, payload: { body, params: pathParameters, query: queryStringParameters }, errors });
		sendError(TypeErrorMessage.VALIDATION, errors)
	}
};