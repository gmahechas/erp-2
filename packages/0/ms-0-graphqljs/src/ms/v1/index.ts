import { directiveDefs } from './directives';
import { typeDefs as ms1TypeDefs, resolvers as ms1Resolvers } from './1';
import { typeDefs as ms3TypeDefs, resolvers as ms3Resolvers } from './3';
import { typeDefs as ms4TypeDefs, resolvers as ms4Resolvers } from './4';

export const v1TypeDefs = [
		directiveDefs,
	...ms1TypeDefs,
	...ms3TypeDefs,
	...ms4TypeDefs
];

export const v1Resolvers = [
	...ms1Resolvers,
	...ms3Resolvers,
	...ms4Resolvers,
];