import { ICountry, ISearchCountry } from '@gmahechas/erp-common';

export enum EntityTypes {
	SEARCH_MANY = '[Country] Search Many',
	SEARCH_MANY_SUCCESS = '[Country] Search Many Success',
	SEARCH_MANY_ERROR = '[Country] Search Many Error',
};

type ISearchMany = { type: typeof EntityTypes.SEARCH_MANY, payload: { data: ISearchCountry[] } };
type ISearchManySuccess = { type: typeof EntityTypes.SEARCH_MANY_SUCCESS, payload: { data: ICountry[] } };
type ISearchManyError = { type: typeof EntityTypes.SEARCH_MANY_ERROR, payload: { error: any } };
export type EntityActionTypes = ISearchMany | ISearchManySuccess | ISearchManyError;

export const entityCreateActionTypes = {
	searchMany: (data: ISearchCountry[]): ISearchMany => ({ type: EntityTypes.SEARCH_MANY, payload: { data } }),
	searchManySuccess: (data: ICountry[]): ISearchManySuccess => ({ type: EntityTypes.SEARCH_MANY_SUCCESS, payload: { data } }),
	searchManyError: (error: any): ISearchManyError => ({ type: EntityTypes.SEARCH_MANY_ERROR, payload: { error } })
}
