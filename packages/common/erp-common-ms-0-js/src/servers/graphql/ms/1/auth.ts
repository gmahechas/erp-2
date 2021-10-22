import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';

export const signinAuth = async (data: ISigninAuth): Promise<IAuth> => {
	const { data: response } = await axiosClient('http://localhost:50001').post<{ data: IAuth }>('/rest/v1/1/auth/signin', data);
	return response.data;
}