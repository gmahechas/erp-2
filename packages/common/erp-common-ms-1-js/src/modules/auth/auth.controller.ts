import {
	ISigninAuth,
	IAuth
} from '@gmahechas/erp-common';
import { AuthError, compareHash, jwtSign } from '@gmahechas/erp-common-ms-utils-js';
import { searchOneUser } from '../user/user.controller';

export const signinAuth = async (data: ISigninAuth): Promise<IAuth> => {
	const { userName, userPassword } = data;

	const user = await searchOneUser({ userName });

	if (!user) {
		throw new AuthError();
	}

	const { id } = user;
	const passwordsMatch = await compareHash(userPassword, user.userPassword);

	if (!passwordsMatch) {
		throw new AuthError();
	}

	const token = jwtSign({
		id,
		userName
	}, 'AnaLu');

	return { id, userName, token };
};