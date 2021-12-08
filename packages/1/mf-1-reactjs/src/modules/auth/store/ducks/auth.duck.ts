import { Dispatch } from 'redux';
import { useQuery, gql } from '@apollo/client';
import { ISigninAuth } from '@gmahechas/erp-common';
import { AuthActionTypes, authCreateActionTypes } from '@mf-1/modules/auth/store/actions/auth.actions';

export const signin = (signinAuth: ISigninAuth) => async (dispatch: Dispatch, getState: () => void) => {
	dispatch(authCreateActionTypes.signin(signinAuth));
	try {
		/* 		const response = await fixme.get('/todos');
				dispatch(entityCreateActionTypes.searchManySuccess(response.data)); */
	} catch (error) {
		dispatch(authCreateActionTypes.signinError(error));
	}
}