import { ISigninAuth } from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage, compareHash, jwtSign, checkExistsFile, readFileSync, env } from '@gmahechas/erp-common-ms-utils-js';
import { searchOneUser } from '../user/user.controller';

export const signinAuth = async (data: ISigninAuth): Promise<{ token: string }> => {
	const { companyKey, userName, userPassword } = data;

	const user = await searchOneUser({ userName, companyKey });

	if (!user) {
		sendError(TypeErrorMessage.AUTH);
	}

	const { id, companyId } = user;
	const passwordsMatch = await compareHash(userPassword, user.userPassword);

	if (!passwordsMatch) {
		sendError(TypeErrorMessage.AUTH);
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
	}, privateKey, { algorithm: 'RS256' });

	return { token };
};