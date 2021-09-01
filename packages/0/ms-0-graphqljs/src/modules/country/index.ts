import { gql } from 'apollo-server-core';
import { ICountry, IEstate } from '@gmahechas/erp-common';

export const typeDefs = gql`
	type Country {
		id: String
  	countryName: String
  	countryCode: String
	}

	type Estate {
		id: String
  	estateName: String
  	estateCode: String
		countryId: String
		country: Country
	}

  type Query {
  	countries(id: String): [Country]
  	estates: [Estate]
	}

	type Mutation {
  	addCountry(id: String, countryName: String, countryCode: String): Country
	}
`;

const countries: ICountry[] = [
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

const estates = [
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

export const resolvers = {
	Query: {
		countries: (_: any, args: any) => {
			return countries;
		},
		estates: () => {
			return estates;
		}
	},
	Mutation: {
		addCountry: (id: string, countryName: string, countryCode: string) => {
			const country = { id, countryName, countryCode };
			countries.push(country);
			return country;
		}
	}
};