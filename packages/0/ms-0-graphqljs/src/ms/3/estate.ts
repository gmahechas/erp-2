import { gql } from '@gmahechas/erp-common-graphqljs';

export const typeDefs = gql`
	type Estate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
		country: Country
	}

  type Query {
  	searchOneEstate(id: String): Estate
	}

	type Mutation {
  	createOneEstate(id: String, estateName: String, estateCode: String, countryId: String): Estate
	}
`;

export const resolvers = {
	Query: {
		searchOneEstate: () => {
			return ({
				id: '2',
				estateName: 'Quintanarro',
				estateCode: 'QUIN',
				countryId: '2',
				country: {
					id: '2',
					countryName: 'Mexico',
					countryCode: 'MX'
				}
			});
		}
	},
	Mutation: {
		createOneEstate: (_: any, args: any) => {
			const { id, estateName, estateCode, countryId } = args;
			return { id, estateName, estateCode, countryId };
		}
	}
};
