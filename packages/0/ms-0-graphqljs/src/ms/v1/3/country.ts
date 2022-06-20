import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, IEstate, ISearchCountry } from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry, searchManyCountry, searchManyEstate } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Country {
		countryId: String
  	countryName: String
  	countryCode: String
		estates: [Estate]
	}

	input CreateOneCountry {
		countryName: String
  	countryCode: String
	}
	input UpdateOneCountry {
		countryId: String
  	countryName: String
  	countryCode: String
	}
	input DeleteOneCountry {
		countryId: String
	}
	input SearchOneCountry {
		countryId: String
		countryName: String
  	countryCode: String
	}
	
	type Mutation {
  	createOneCountry(data: CreateOneCountry): Country @authentication @logger
		updateOneCountry(data: UpdateOneCountry): Country @authentication @logger
		deleteOneCountry(data: DeleteOneCountry): Country @authentication @logger
	}
  type Query {
  	searchOneCountry(data: SearchOneCountry): Country @authentication @logger
		searchManyCountry(data: [SearchOneCountry]): [Country] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneCountry: async (_: any, { data }: { data: ICreateCountry }): Promise<ICountry> => {
			const result = await createOneCountry(data);
			return result;
		},
		updateOneCountry: async (_: any, { data }: { data: IUpdateCountry }): Promise<ICountry | null> => {
			const result = await updateOneCountry(data);
			return result;
		},
		deleteOneCountry: async (_: any, { data }: { data: IDeleteCountry }): Promise<ICountry | null> => {
			const result = await deleteOneCountry(data);
			return result;
		},
	},
	Query: {
		searchOneCountry: async (_: object, { data }: { data: Partial<ISearchCountry> }): Promise<ICountry | null> => {
			const result = await searchOneCountry(data);
			return result;
		},
		searchManyCountry: async (_: object, { data }: { data: Partial<ISearchCountry>[] }): Promise<ICountry[]> => {
			const result = await searchManyCountry(data);
			return result;
		},
	},
	Country: {
		estates: async (parent: ICountry, _: object): Promise<IEstate[]> => {
			const { countryId } = parent;
			const result = await searchManyEstate([{ countryId }]);
			return result;
		},
	},
};