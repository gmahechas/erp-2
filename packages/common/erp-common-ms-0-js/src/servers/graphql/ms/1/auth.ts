import { IAuth, ISigninAuth } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';

export const signinAuth = async (data: ISigninAuth): Promise<{ token: string }> => {
	const { data: response } = await axiosClient('http://localhost:50001').post<{ data: { token: string } }>('/rest/v1/1/auth/signin', data);
	return response.data;
}