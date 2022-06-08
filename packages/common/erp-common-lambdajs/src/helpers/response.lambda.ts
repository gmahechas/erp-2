import { IResponse } from '@gmahechas/erp-common-js';

export const responseLambda = (response: IResponse) => {
	const { statusCode, body } = response;
	return { statusCode, body: JSON.stringify(body) };
}