import { Dispatch } from 'redux';
import { ISearchCountry } from '@gmahechas/erp-common';

import { graphqlClientV1 } from '@mf-3/helpers/graphql';
import { searchManyQuery } from '@mf-3/modules/country/graphql/queries';
import { entityCreateActionTypes } from '@mf-3/modules/country/store/actions';

export const searchMany = (search: ISearchCountry[]) => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(entityCreateActionTypes.searchMany(search));
		const result = await graphqlClientV1.query({ query: searchManyQuery, variables: { data: search } });
		dispatch(entityCreateActionTypes.searchManySuccess(result.data.searchManyCountry));
	} catch (error) {
		dispatch(entityCreateActionTypes.searchManyError(error));
	}
}
