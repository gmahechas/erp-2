import { ISigninAuth } from '@gmahechas/erp-common';
import { sendError, compareHash, jwtSign, resolvePath, checkExistsFile, readFileSync, env } from '@gmahechas/erp-common-ms-utils-js';
import { searchOneUser } from '../user/user.controller';

export const signinAuth = async (data: ISigninAuth): Promise<{ token: string }> => {
	const { userName, userPassword } = data;

	const user = await searchOneUser({ userName });

	if (!user) {
		sendError('authentication_error');
	}

	const { id } = user;
	const passwordsMatch = await compareHash(userPassword, user.userPassword);

	if (!passwordsMatch) {
		sendError('authentication_error');
	}

	const privateKeyPath = env.ms?.one?.auth?.jwt?.privateKey!;
	if (!checkExistsFile(privateKeyPath)) {
		sendError('error_config');
	}

	const privateKey = readFileSync(privateKeyPath);

	const token = jwtSign({
		id,
		userName
	}, privateKey, { algorithm: 'RS256' });

	return { token };
};