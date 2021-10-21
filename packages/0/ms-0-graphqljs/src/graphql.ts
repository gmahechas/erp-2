import { GraphQLError, ApolloServer } from '@gmahechas/erp-common-graphqljs';
import { errorHandlerGraphQL } from './middlewares/error-handler.graphql';
import { authMiddleware } from './middlewares/auth.middleware';
import { typeDefs, resolvers } from './ms';

export default async () => {
	const graphql = new ApolloServer({
		typeDefs,
		resolvers,
		debug: false,
		formatError: (error: GraphQLError) => errorHandlerGraphQL(error),
		context: async ({ req, res }) => await authMiddleware(req, res)
	});
	await graphql.start();
	return graphql;
}



