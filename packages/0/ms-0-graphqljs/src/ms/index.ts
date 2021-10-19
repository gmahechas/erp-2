import { typeDefs as ms1TypeDefs, resolvers as ms1Resolvers } from './1';
import { typeDefs as ms3TypeDefs, resolvers as ms3Resolvers } from './3';

export const typeDefs = [
	...ms1TypeDefs,
	...ms3TypeDefs
];

export const resolvers = [
	...ms1Resolvers,
	...ms3Resolvers
];