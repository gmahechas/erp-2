import { IRequest, IResponse, iresponse } from '@gmahechas/erp-common';

export const getCountries = async (request: IRequest): Promise<IResponse> => {
	return iresponse(200, request.body);
};