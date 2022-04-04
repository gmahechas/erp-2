import { ISigninAuth } from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage, compareHash, jwtSign, env } from '@gmahechas/erp-common-ms-utils-js';
import { searchOneUserToSignin } from '../user/user.controller';

export const signinAuth = async (data: ISigninAuth): Promise<{ token: string }> => {
	const { companyKey, userName, userPassword } = data;

	const user = await searchOneUserToSignin({ userName, companyKey });

	if (!user) {
		sendError(TypeErrorMessage.AUTHENTICATION);
	}

	const { id, companyId } = user;
	const passwordsMatch = await compareHash(userPassword, user.userPassword);

	if (!passwordsMatch) {
		sendError(TypeErrorMessage.AUTHENTICATION);
	}

	const privateKey = env['ms-1']?.auth?.jwt?.privateKey;
	if (!privateKey) {
		sendError(TypeErrorMessage.CONFIG);
	}

	const token = jwtSign({
		id,
		userName,
		companyId,
		companyKey,
	}, privateKey, { algorithm: 'RS256', expiresIn: (60 * 60 * 24) });

	return { token };
};