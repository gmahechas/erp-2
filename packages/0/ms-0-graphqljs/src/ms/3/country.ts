import { gql } from '@gmahechas/erp-common-graphqljs';

export const typeDefs = gql`
	type Country {
		id: String
  	countryName: String
  	countryCode: String
	}

  type Query {
  	countries(id: String): [Country]
	}

	type Mutation {
  	addCountry(id: String, countryName: String, countryCode: String): Country
	}
`;

export const resolvers = {
	Query: {
		countries: (_: any, args: any) => {
			return [
				{
					id: '1',
					countryName: 'Colombia',
					countryCode: 'CO'
				},
				{
					id: '2',
					countryName: 'Mexico',
					countryCode: 'MX'
				}
			];
		}
	},
	Mutation: {
		addCountry: (_: any, args: any) => {
			const { id, countryName, countryCode } = args;
			console.log(id, countryName, countryCode)
			return { id, countryName, countryCode };
		}
	}
};