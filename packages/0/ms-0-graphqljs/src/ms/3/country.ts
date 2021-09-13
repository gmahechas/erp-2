import { gql } from '@gmahechas/erp-common-graphqljs';

export const typeDefs = gql`
	type Country {
		id: String
  	countryName: String
  	countryCode: String
	}

  type Query {
  	searchOneCountry(id: String): Country
	}

	type Mutation {
  	createOneCountry(id: String, countryName: String, countryCode: String): Country
	}
`;

export const resolvers = {
	Query: {
		searchOneCountry: (_: any, args: any) => {
			return ({
				id: '1',
				countryName: 'Colombia',
				countryCode: 'CO'
			});
		}
	},
	Mutation: {
		createOneCountry: (_: any, args: any) => {
			const { id, countryName, countryCode } = args;
			return { id, countryName, countryCode };
		}
	}
};