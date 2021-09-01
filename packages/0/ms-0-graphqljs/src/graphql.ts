import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './modules/country';

export default async () => {
	const graphql = new ApolloServer({
		typeDefs,
		resolvers
	});
	await graphql.start();
	return graphql;
}



