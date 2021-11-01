import { ApolloServer } from '@gmahechas/erp-common-graphqljs';
import { v1TypeDefs, v1Resolvers } from './ms';
import { authMiddleware, errorMiddleware } from './middlewares';

export const graphqlV1 = async () => {
	const graphql = new ApolloServer({
		typeDefs: v1TypeDefs,
		resolvers: v1Resolvers,
		debug: false,
		formatError: (error) => errorMiddleware(error),
		context: async ({ req, res }) => await authMiddleware(req, res)
	});
	await graphql.start();
	return graphql;
}