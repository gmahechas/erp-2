import { typeDefs as countryTypeDefs, resolvers as countryResolvers } from './country';
import { typeDefs as estateTypeDefs, resolvers as estateResolvers } from './estate';

export const v1TypeDefs = [countryTypeDefs, estateTypeDefs];

export const v1Resolvers = [countryResolvers, estateResolvers];
