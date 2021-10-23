import {
	ICreateEstate,
	IUpdateEstate,
	IDeleteEstate,
	ISearchEstate,
	IEstate
} from '@gmahechas/erp-common';
import { Estate } from './estate.mongo';

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	const estate = new Estate(data);
	return await estate.save();
};

export const updateOneEstate = async (data: IUpdateEstate): Promise<IEstate> => {
	const { id, estateName, estateCode, countryId } = data;
	const estate = await Estate.findOneAndUpdate({ id }, { estateName, estateCode, countryId }) as IEstate;
	return estate;
};

export const deleteOneEstate = async (data: IDeleteEstate): Promise<IEstate> => {
	const estate = await Estate.findOneAndDelete(data) as IEstate;
	return estate;
};

export const searchOneEstate = async (data: ISearchEstate): Promise<IEstate> => {
	const estate = await Estate.findOne({ estateName: { $regex: data.estateName } }) as IEstate;
	return estate;
};

export const searchManyEstate = async (data: ISearchEstate[]): Promise<IEstate[]> => {
	const estates = await Estate.find({ $in: data }) as IEstate[];
	return estates;
};