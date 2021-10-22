import { ICreateEstate, IEstate, ISearchEstate } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';

export const searchOneEstate = async (data: ISearchEstate): Promise<IEstate> => {
	return { id: '2', estateName: 'Quintanarro', estateCode: 'QUIN', countryId: '2'};
}

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	const { data: response } = await axiosClient('http://localhost:50003').post<{ data: IEstate }>('/rest/v1/3/estate/create/one', data);
	return response.data;
};