import { ApolloServer, makeExecutableSchema, applyDirectives, createFormatError } from '@gmahechas/erp-common-graphqljs';
import { v1TypeDefs, v1Resolvers } from './ms';

export const graphqlV1 = async () => {
	let schema = makeExecutableSchema({ typeDefs: v1TypeDefs, resolvers: v1Resolvers });
	schema = applyDirectives(schema);
	const graphql = new ApolloServer({
		schema,
		debug: false,
		context: async ({ req, res }) => ({ req, res }),
		formatError: (error) => createFormatError(error),
	});
	await graphql.start();
	return graphql;
}

