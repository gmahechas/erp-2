import { IResponse } from '@gmahechas/erp-common';

export const responseLambda = (response: IResponse) => {
	const { statusCode, body } = response;
	return {
		statusCode,
		headers: {
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
		},
		body: JSON.stringify(body) };
}