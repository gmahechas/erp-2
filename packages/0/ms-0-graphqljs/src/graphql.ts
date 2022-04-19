import { ApolloServer } from '@gmahechas/erp-common-graphqljs';
import { v1TypeDefs, v1Resolvers } from './ms';
import { authenticationMiddleware, errorMiddleware } from './middlewares';

export const graphqlV1 = async () => {
	const graphql = new ApolloServer({
		typeDefs: v1TypeDefs,
		resolvers: v1Resolvers,
		debug: false,
		context: async ({ req, res }) => await authenticationMiddleware(req, res),
		formatError: (error) => errorMiddleware(error),
	});
	await graphql.start();
	return graphql;
}