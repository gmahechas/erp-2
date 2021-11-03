import { typeDefs as authTypedefs, resolvers as authResolvers } from './auth';
import { typeDefs as userTypedefs, resolvers as userResolvers } from './user';

export const typeDefs = [
	authTypedefs,
	userTypedefs
];

export const resolvers = [
	authResolvers,
	userResolvers
];