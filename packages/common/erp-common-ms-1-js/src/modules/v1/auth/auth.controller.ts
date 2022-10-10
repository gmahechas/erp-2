import { IPolicy, ISigninAuth, IUser } from '@gmahechas/erp-common-js';
import {
  sendError,
  TypeErrorMessage,
  compareHash,
  jwtSign,
  env,
} from '@gmahechas/erp-common-ms-utils-js';
import { searchOneUserToSignin } from '../user/user.controller';

export const signinAuth = async (
  data: ISigninAuth,
): Promise<{ token: string }> => {
  const { companyKey, userName, userPassword } = data;

  const user = (await searchOneUserToSignin({ userName, companyKey })) as
    | (Omit<IUser, 'groups' | 'policies'> & {
        groups: { policies: IPolicy[] };
        policies: IPolicy[];
      })
    | null;
  if (!user) {
    sendError(TypeErrorMessage.AUTHENTICATION);
  }

  const { userId, companyId } = user;
  const passwordsMatch = await compareHash(userPassword, user.userPassword);

  if (!passwordsMatch) {
    sendError(TypeErrorMessage.AUTHENTICATION);
  }

  const policies = user.groups.policies
    .concat(user.policies)
    .reduce((acc, policy) => {
      if (!acc.find((item) => item.policyId === policy.policyId)) {
        acc.push(policy);
      }
      return acc;
    }, [] as IPolicy[]);

  const scope: { [key: string]: string[] } = {};
  for (const policy of policies) {
    const { service, actions } = policy;
    if (!scope[service]) {
      scope[service] = actions;
    } else {
      for (const action of actions) {
        if (!scope[service].find((item) => item === action)) {
          scope[service].push(action);
        }
      }
    }
  }

  const privateKey = env['ms-1']?.auth?.jwt?.privateKey;
  if (!privateKey) {
    sendError(TypeErrorMessage.CONFIG);
  }

  const token = jwtSign(
    {
      userId,
      userName,
      companyId,
      companyKey,
      scope: JSON.stringify(scope),
    },
    privateKey,
    { algorithm: 'RS256', expiresIn: 60 * 60 * 24 },
  );

  return { token };
};
