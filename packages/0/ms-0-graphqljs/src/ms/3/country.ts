import { ICountry, ICreateCountry, IEstate, ISearchCountry } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneCountry, searchOneCountry, searchManyEstate } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Country {
		id: String
  	countryName: String
  	countryCode: String
		estates: [Estate]
	}
	type Mutation {
  	createOneCountry(countryName: String, countryCode: String): Country
	}
  type Query {
  	searchOneCountry: Country
	}
`;

export const resolvers = {
	Mutation: {
		createOneCountry: async (_: any, args: ICreateCountry, context: IContext): Promise<ICountry> => {
			return await createOneCountry(args);
		}
	},
	Query: {
		searchOneCountry: async (_: object, args: ISearchCountry, context: IContext): Promise<ICountry> => {
			return await searchOneCountry(args);
		}
	},
	Country: {
		estates: async (parent: ICountry, _: object, context: IContext): Promise<IEstate[]> => {
			return await searchManyEstate([{ countryId: parent.id }]);
		}
	},
};