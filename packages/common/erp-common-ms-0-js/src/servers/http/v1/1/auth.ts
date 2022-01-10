import { ISigninAuth } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const signinAuth = async (data: ISigninAuth): Promise<{ token: string }> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: { token: string } }>('/rest/v1/1/auth/signin', data);
	return response.data;
}