import { typeDefs as countryTypeDefs, resolvers as countryResolvers } from './country';
import { typeDefs as estateTypeDefs, resolvers as estateResolvers } from './estate';

export const typeDefs = [
	countryTypeDefs,
	estateTypeDefs
];

export const resolvers = [
	countryResolvers,
	estateResolvers	
];