import {
	ICreateEstate,
	IUpdateEstate,
	IDeleteEstate,
	ISearchEstate,
	IEstate
} from '@gmahechas/erp-common';

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	return { id: '1', ...data };
};

export const updateOneEstate = async (data: IUpdateEstate): Promise<IEstate> => {
	return data;
};

export const deleteOneEstate = async (data: IDeleteEstate): Promise<IEstate> => {
	return { estateName: 'estateName', estateCode: 'estateCode', countryId: '1', ...data };
};

export const searchOneEstate = async (data: ISearchEstate): Promise<IEstate> => {
	return data;
};