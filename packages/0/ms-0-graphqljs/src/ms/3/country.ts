import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { grpcClients3 } from '@gmahechas/erp-common-grpcjs';

export const typeDefs = gql`
	type Country {
		id: String
  	countryName: String
  	countryCode: String
	}
  type Query {
  	searchOneCountry: Country
	}
	type Mutation {
  	createOneCountry(countryName: String, countryCode: String): Country
	}
`;

export const resolvers = {
	Query: {
		searchOneCountry: (parent: any, args: any, context: IContext) => {
			return ({
				id: '1',
				countryName: 'Colombia',
				countryCode: 'CO'
			});
		}
	},
	Mutation: {
		createOneCountry: async (parent: any, args: any, context: IContext) => {
			const result = await grpcClients3.countryClientAsync.createOne(args);
			return result?.data;
		}
	}
};