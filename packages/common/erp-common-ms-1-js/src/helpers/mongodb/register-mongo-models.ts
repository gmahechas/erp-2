import { registerUserModel } from '../../modules/v1/user/user.mongo';
import { registerGroupModel } from '../../modules/v1/group/group.mongo';
import { registerPolicyModel } from '../../modules/v1/policy/policy.mongo';

export const registerMongoModels = [
  registerUserModel,
  registerGroupModel,
  registerPolicyModel,
];
