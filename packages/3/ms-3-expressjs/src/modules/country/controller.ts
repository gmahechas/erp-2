import { IRequest, IResponse, response } from '@gmahechas/erp-common-expressjs';

export const getCountries = async (request: IRequest): Promise<IResponse> => {
	return response(200, request.body);
};