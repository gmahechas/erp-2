import { Dispatch } from 'redux';
import { ISigninAuth } from '@gmahechas/erp-common';

import { graphqlClientV1 } from '@mf-1/helpers/graphql';
import { signinAuth } from '@mf-1/modules/auth/graphql/queries';
import { authCreateActionTypes } from '@mf-1/modules/auth/store/actions/auth.actions';

export const signin = (data: ISigninAuth) => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(authCreateActionTypes.signin(data));
		const result = await graphqlClientV1.query({ query: signinAuth, variables: { data } });
		dispatch(authCreateActionTypes.signinSuccess(result.data.signinAuth));
	} catch (error) {
		dispatch(authCreateActionTypes.signinError(error));
	}
}