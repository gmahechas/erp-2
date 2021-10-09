import { gql } from '@gmahechas/erp-common-graphqljs';

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
		searchOneCountry: () => {
			return ({
				id: '1',
				countryName: 'Colombia',
				countryCode: 'CO'
			});
		}
	},
	Mutation: {
		createOneCountry: async (parent: any, args: any) => {
			try {
				const { countryName, countryCode } = args;
				return { id: '1', countryName, countryCode };
			} catch (error) {
				throw error;
			}
		}
	}
};