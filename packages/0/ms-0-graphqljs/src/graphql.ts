import { ApolloServer, makeExecutableSchema, authenticationDirective, createContext } from '@gmahechas/erp-common-graphqljs';
import { v1TypeDefs, v1Resolvers } from './ms';
import { errorMiddleware } from './middlewares';

export const graphqlV1 = async () => {
	let schema = makeExecutableSchema({ typeDefs: v1TypeDefs, resolvers: v1Resolvers });
	schema = authenticationDirective(schema, 'authentication');
	const graphql = new ApolloServer({
		schema,
		debug: false,
		context: async ({ req, res }) => await createContext(req, res),
		formatError: (error) => errorMiddleware(error),
	});
	await graphql.start();
	return graphql;
}

