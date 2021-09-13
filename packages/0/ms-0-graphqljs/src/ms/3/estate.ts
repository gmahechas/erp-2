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
  	estates(id: String): [Estate]
	}

	type Mutation {
  	addEstate(id: String, estateName: String, estateCode: String, countryId: String): Estate
	}
`;

export const resolvers = {
	Query: {
		estates: () => {
			return [
				{
					id: '1',
					estateName: 'Tolima',
					estateCode: 'TOL',
					countryId: '1',
					country: {
						id: '1',
						countryName: 'Colombia',
						countryCode: 'CO'
					}
				},
				{
					id: '2',
					estateName: 'Quintanarro',
					estateCode: 'QUIN',
					countryId: '2',
					country: {
						id: '2',
						countryName: 'Mexico',
						countryCode: 'MX'
					}
				}
			];
		}
	},
	Mutation: {
		addEstate: (_: any, args: any) => {
			const { id, estateName, estateCode, countryId } = args;
			return { id, estateName, estateCode, countryId };
		}
	}
};
