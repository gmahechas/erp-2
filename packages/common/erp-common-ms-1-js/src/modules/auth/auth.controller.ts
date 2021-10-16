import {
	ISigninAuth,
	IAuth
} from '@gmahechas/erp-common';
import { AuthError, compareHash } from '@gmahechas/erp-common-ms-utils-js';
import { searchOneUser } from '../user/user.controller';

export const signinAuth = async (data: ISigninAuth): Promise<IAuth> => {
	const { userName, userPassword } = data;

	const user = await searchOneUser({ userName });

	if (!user) {
		throw new AuthError();
	}

	const passwordsMatch = await compareHash(userPassword, user.userPassword);

	if (!passwordsMatch) {
		throw new AuthError();
	}

	return {
		id: '12',
		userName: 'gmahechas',
		token: 'thetoken'
	};
};