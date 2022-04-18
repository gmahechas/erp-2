import { IPolicy, ISigninAuth, IUser } from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage, compareHash, jwtSign, env } from '@gmahechas/erp-common-ms-utils-js';
import { searchOneUserToSignin } from '../user/user.controller';

export const signinAuth = async (data: ISigninAuth): Promise<{ token: string }> => {
	const { companyKey, userName, userPassword } = data;

	const user = await searchOneUserToSignin({ userName, companyKey }) as Omit<IUser, 'groups' | 'policies'> & { groups: { policies: IPolicy[] }, policies: IPolicy[] } | null;
	if (!user) {
		sendError(TypeErrorMessage.AUTHENTICATION);
	}
	
	const { id, companyId } = user;
	const passwordsMatch = await compareHash(userPassword, user.userPassword);
	
	if (!passwordsMatch) {
		sendError(TypeErrorMessage.AUTHENTICATION);
	}
	
	const policies = user.groups.policies.concat(user.policies).reduce((acc, policy) => { 
		if (!acc.find(item => item.id === policy.id)) {
			acc.push(policy);
		}
		return acc;
	}, [] as IPolicy[]);
	const scope: { [key: string]: string[] } = {};
	for (const policy of policies) {
		for (const service of policy.services) {
			if (!scope[service]) {
				scope[service] = policy.actions;
			} else {
				for (const action of policy.actions) {
					if (!scope[service].find(item => item === action)) {
						scope[service].push(action);
					}
				}
			}
		}
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
		scope,
	}, privateKey, { algorithm: 'RS256', expiresIn: (60 * 60 * 24) });

	return { token };
};