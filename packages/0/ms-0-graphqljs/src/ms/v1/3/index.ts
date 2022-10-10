import {
  typeDefs as countryTypedefs,
  resolvers as countryResolvers,
} from './country';
import {
  typeDefs as estateTypedefs,
  resolvers as estateResolvers,
} from './estate';
import { typeDefs as cityTypedefs, resolvers as cityResolvers } from './city';

export const typeDefs = [countryTypedefs, estateTypedefs, cityTypedefs];

export const resolvers = [countryResolvers, estateResolvers, cityResolvers];
