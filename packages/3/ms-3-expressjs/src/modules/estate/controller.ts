import { IRequest, IResponse, response } from '@gmahechas/erp-common-expressjs';

export const getEstates = async (request: IRequest): Promise<IResponse> => {
	return response(200, request.body);
};