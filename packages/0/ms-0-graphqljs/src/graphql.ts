import { GraphQLError, ApolloServer, errorHandlerGraphQL } from '@gmahechas/erp-common-graphqljs';
import { authMiddleware } from './middlewares/auth.middleware';
import { typeDefs, resolvers } from './ms';

export default async () => {
	const graphql = new ApolloServer({
		typeDefs,
		resolvers,
		debug: true,
		formatError: (error: GraphQLError) => errorHandlerGraphQL(error),
		context: async ({ req, res }) => await authMiddleware(req, res)
	});
	await graphql.start();
	return graphql;
}



