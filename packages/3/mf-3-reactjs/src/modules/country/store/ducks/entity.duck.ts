import { Dispatch } from 'redux';
import { ISearchCountry } from '@gmahechas/erp-common';

import { graphqlClientV1 } from '@mf-3/helpers/graphql';
import { searchManyCountry } from '@mf-3/modules/country/graphql/queries';
import { entityCreateActionTypes } from '@mf-3/modules/country/store/actions';

export const searchMany = (data: ISearchCountry[]) => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(entityCreateActionTypes.searchMany(data));
		const result = await graphqlClientV1.query({ query: searchManyCountry, variables: { data } });
		dispatch(entityCreateActionTypes.searchManySuccess(result.data.searchManyCountry));
	} catch (error) {
		dispatch(entityCreateActionTypes.searchManyError(error));
	}
}
