import { IEstate, ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from '@gmahechas/erp-common';
import { Estate } from './estate.mongo';

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	const result = await Estate.create(data);
	return result;
};

export const updateOneEstate = async (data: IUpdateEstate): Promise<IEstate | null> => {
	const { id, estateName, estateCode, countryId } = data;
	const result = await Estate.updateOne({ id }, { estateName, estateCode, countryId });
	if (result.modifiedCount == 1) {
		return { id, estateName, estateCode, countryId };
	} else {
		return null;
	}
};

export const deleteOneEstate = async (data: IDeleteEstate): Promise<IEstate | null> => {
	const result = await Estate.deleteOne(data);
	if (result.deletedCount == 1) {
		return { id: data.id, estateName: 'fixme', estateCode: 'fixme', countryId: 'fixme' };
	} else {
		return null;
	}
};

export const searchOneEstate = async (data: ISearchEstate): Promise<IEstate | null> => {
	const { id } = data;
	const result = await Estate.findOne({ id });
	return result;
};

export const searchManyEstate = async (data: ISearchEstate[]): Promise<IEstate[]> => {
	const result = await Estate.find({ $or: data });
	return result;
};