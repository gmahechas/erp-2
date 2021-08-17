import { IResponse } from '@gmahechas/erp-common';

export const responseLambda = (response: IResponse) => {
	const { statusCode, body } = response;
	return { statusCode, body: JSON.stringify(body) };
}