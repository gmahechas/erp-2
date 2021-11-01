import { typeDefs as countryTypedefs, resolvers as countryResolvers } from './country';
import { typeDefs as estateTypedefs, resolvers as estateResolvers } from './estate';

export const typeDefs = [
	countryTypedefs,
	estateTypedefs
];

export const resolvers = [
	countryResolvers,
	estateResolvers
];