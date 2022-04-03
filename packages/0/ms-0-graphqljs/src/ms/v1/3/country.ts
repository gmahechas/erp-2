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
		searchManyCountry(data: [SearchOneCountry]): [Country]
	}
`;

export const resolvers = {
	Mutation: {
		createOneCountry: async (_: any, { data }: { data: ICreateCountry }, { token }: IContext): Promise<ICountry> => {
			const result = await createOneCountry(token!, data);
			return result;
		},
		updateOneCountry: async (_: any, { data }: { data: IUpdateCountry }, { token }: IContext): Promise<ICountry | null> => {
			const result = await updateOneCountry(token!, data);
			return result;
		},
		deleteOneCountry: async (_: any, { data }: { data: IDeleteCountry }, { token }: IContext): Promise<ICountry | null> => {
			const result = await deleteOneCountry(token!, data);
			return result;
		},
	},
	Query: {
		searchOneCountry: async (_: object, { data }: { data: Partial<ISearchCountry> }, { token }: IContext): Promise<ICountry | null> => {
			const result = await searchOneCountry(token!, data);
			return result;
		},
		searchManyCountry: async (_: object, { data }: { data: Partial<ISearchCountry>[] }, { token }: IContext): Promise<ICountry[]> => {
			const result = await searchManyCountry(token!, data);
			return result;
		},
	},
	Country: {
		estates: async (parent: ICountry, _: object, { token }: IContext): Promise<IEstate[]> => {
			const result = await searchManyEstate(token!, [{ countryId: parent.id }]);
			return result;
		},
	},
};