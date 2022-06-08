import { ISigninAuth } from '@gmahechas/erp-common-js';
import { axiosClient, env, Context } from '@gmahechas/erp-common-ms-utils-js';

export const signinAuth = async (data: ISigninAuth): Promise<{ token: string }> => {
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: { token: string } }>('/rest/v1/1/auth/signin', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId } });
	return response.data;
}