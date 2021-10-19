import { GraphQLError, ApolloServer, authMiddleware, errorHandlerGraphQL } from '@gmahechas/erp-common-graphqljs';
import { typeDefs, resolvers } from './ms';

export default async () => {
	const graphql = new ApolloServer({
		typeDefs,
		resolvers,
		debug: true,
		formatError: (error: GraphQLError) => errorHandlerGraphQL(error),
		context: async ({ req, res }) => ({ req, res })
	});
	await graphql.start();
	return graphql;
}



