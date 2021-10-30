import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, IEstate, ISearchCountry } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry, searchManyCountry, searchManyEstate } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Country {
		id: String
  	countryName: String
  	countryCode: String
		estates: [Estate]
	}

	input CreateOneCountry {
		countryName: String
  	countryCode: String
	}
	input UpdateOneCountry {
		id: String
  	countryName: String
  	countryCode: String
	}
	input DeleteOneCountry {
		id: String
	}
	input SearchOneCountry {
		id: String
	}
	input SearchManyCountry {
		id: String
		countryName: String
  	countryCode: String
	}
	
	type Mutation {
  	createOneCountry(data: CreateOneCountry): Country
		updateOneCountry(data: UpdateOneCountry): Country
		deleteOneCountry(data: DeleteOneCountry): Country
	}
  type Query {
  	searchOneCountry(data: SearchOneCountry): Country
		searchManyCountry(data: [SearchManyCountry]): [Country]
	}
`;

export const resolvers = {
	Mutation: {
		createOneCountry: async (_: any, { data }: { data: ICreateCountry }, context: IContext): Promise<ICountry> => {
			return await createOneCountry(data);
		},
		updateOneCountry: async (_: any, { data }: { data: IUpdateCountry }, context: IContext): Promise<ICountry | null> => {
			return await updateOneCountry(data);
		},
		deleteOneCountry: async (_: any, { data }: { data: IDeleteCountry }, context: IContext): Promise<ICountry | null> => {
			return await deleteOneCountry(data);
		}
	},
	Query: {
		searchOneCountry: async (_: object, { data }: { data: ISearchCountry }, context: IContext): Promise<ICountry | null> => {
			return await searchOneCountry(data);
		},
		searchManyCountry: async (_: object, { data }: { data: ISearchCountry[] }, context: IContext): Promise<ICountry[]> => {
			return await searchManyCountry(data);
		}
	},
	Country: {
		estates: async (parent: ICountry, _: object, context: IContext): Promise<IEstate[]> => {
			return await searchManyEstate([{ countryId: parent.id }]);
		}
	},
};