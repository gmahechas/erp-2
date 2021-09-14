import { ApolloServer } from '@gmahechas/erp-common-graphqljs';
import { typeDefs, resolvers } from './ms';

export default async () => {
	const graphql = new ApolloServer({
		typeDefs,
		resolvers,
		debug: false
	});
	await graphql.start();
	return graphql;
}



