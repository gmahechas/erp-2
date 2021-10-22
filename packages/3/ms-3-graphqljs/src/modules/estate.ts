import { ICountry, ICreateEstate, IEstate, ISearchEstate } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';

export const typeDefs = gql`
	type Estate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
		country: Country
	}
  type Query {
  	searchOneEstate: Estate
	}
	type Mutation {
  	createOneEstate(estateName: String, estateCode: String, countryId: String): Estate
	}
`;

export const resolvers = {
	Query: {
		searchOneEstate: async (_: object, args: ISearchEstate, context: IContext): Promise<IEstate> => {
			return { id: '1', estateName: 'Quintanarro', estateCode: 'QUIN', countryId: '2' };
		}
	},
	Mutation: {
		createOneEstate: async (_: object, args: ICreateEstate, context: IContext): Promise<IEstate> => {
			const { estateName, estateCode, countryId } = args;
			return { id: '1', estateName, estateCode, countryId };
		}
	},
	Estate: {
		country: async (parent: IEstate, _: object, context: IContext): Promise<ICountry> => {
			return { id: '2', countryName: 'Colombia', countryCode: 'CO' }
		}
	}
};
