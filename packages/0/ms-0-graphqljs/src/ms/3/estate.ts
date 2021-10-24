import { ICountry, ICreateEstate, IEstate, ISearchEstate } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneEstate, searchOneEstate, searchOneCountry } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Estate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
		country: Country
	}
	type Mutation {
  	createOneEstate(estateName: String, estateCode: String, countryId: String): Estate
	}
  type Query {
  	searchOneEstate: Estate
	}
`;

export const resolvers = {
	Mutation: {
		createOneEstate: async (_: object, args: ICreateEstate, context: IContext): Promise<IEstate> => {
			return await createOneEstate(args);
		}
	},
	Query: {
		searchOneEstate: async (_: object, args: ISearchEstate, context: IContext): Promise<IEstate> => {
			return await searchOneEstate(args);
		}
	},
	Estate: {
		country: async (parent: IEstate, _: object, context: IContext): Promise<ICountry> => {
			return await searchOneCountry({ id: parent.countryId });
		}
	},
};
