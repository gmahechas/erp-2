import { ICountry, ISearchCountry, ICreateCountry } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';

export const searchOneCountry = async (data: Partial<ISearchCountry>): Promise<ICountry> => {
	return { id: '1', countryName: 'Colombianitoz', countryCode: 'CO' };
}

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
	const { data: response } = await axiosClient('http://localhost:50003').post<{ data: ICountry }>('/rest/v1/3/country/create/one', data);
	return response.data;
};