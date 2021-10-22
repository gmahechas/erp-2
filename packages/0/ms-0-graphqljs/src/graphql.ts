import { ApolloServer } from '@gmahechas/erp-common-graphqljs';
import { typeDefs, resolvers } from './ms';
import { authMiddleware, errorMiddleware } from './middlewares';

export default async () => {
	const graphql = new ApolloServer({
		typeDefs,
		resolvers,
		debug: false,
		formatError: (error) => errorMiddleware(error),
		context: async ({ req, res }) => await authMiddleware(req, res)
	});
	await graphql.start();
	return graphql;
}



