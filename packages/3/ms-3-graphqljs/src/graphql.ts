import { ApolloServer } from '@gmahechas/erp-common-graphqljs';
import { v1TypeDefs, v1Resolvers } from './modules';

export const graphqlV1 = async () => {
	const graphql = new ApolloServer({
		typeDefs: v1TypeDefs,
		resolvers: v1Resolvers,
		debug: false
	});
	await graphql.start();
	return graphql;
}



