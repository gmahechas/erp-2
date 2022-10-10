import { typeDefs as authTypedefs, resolvers as authResolvers } from './auth';
import {
  typeDefs as groupTypedefs,
  resolvers as groupResolvers,
} from './group';
import {
  typeDefs as policyTypedefs,
  resolvers as policyResolvers,
} from './policy';
import { typeDefs as userTypedefs, resolvers as userResolvers } from './user';

export const typeDefs = [
  authTypedefs,
  groupTypedefs,
  policyTypedefs,
  userTypedefs,
];

export const resolvers = [
  authResolvers,
  groupResolvers,
  policyResolvers,
  userResolvers,
];
