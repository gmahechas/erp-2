import { ICreateCity, IDeleteCity, ICity, ISearchCity, IUpdateCity, IEstate } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneCity, updateOneCity, deleteOneCity, searchOneCity, searchManyCity, searchOneEstate } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type City {
		id: String
  	cityName: String
  	cityCode: String
  	estateId: String
		estate: Estate
	}

	input CreateOneCity {
  	cityName: String
  	cityCode: String
  	estateId: String
	}
	input UpdateOneCity {
		id: String
  	cityName: String
  	cityCode: String
  	estateId: String
	}
	input DeleteOneCity {
		id: String
	}
	input SearchOneCity {
		id: String
  	cityName: String
  	cityCode: String
  	estateId: String
	}

	type Mutation {
  	createOneCity(data: CreateOneCity): City @authentication @logger
		updateOneCity(data: UpdateOneCity): City @authentication @logger
		deleteOneCity(data: DeleteOneCity): City @authentication @logger
	}
  type Query {
  	searchOneCity(data: SearchOneCity): City @authentication @logger
		searchManyCity(data: [SearchOneCity]): [City] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneCity: async (_: object, { data }: { data: ICreateCity }, { token }: IContext): Promise<ICity> => {
			const result = await createOneCity(data, token!);
			return result;
		},
		updateOneCity: async (_: any, { data }: { data: IUpdateCity }, { token }: IContext): Promise<ICity | null> => {
			const result = await updateOneCity(data, token!);
			return result;
		},
		deleteOneCity: async (_: any, { data }: { data: IDeleteCity }, { token }: IContext): Promise<ICity | null> => {
			const result = await deleteOneCity(data, token!);
			return result;
		},
	},
	Query: {
		searchOneCity: async (_: object, { data }: { data: Partial<ISearchCity> }, { token }: IContext): Promise<ICity | null> => {
			const result = await searchOneCity(data, token!);
			return result;
		},
		searchManyCity: async (_: object, { data }: { data: Partial<ISearchCity>[] }, { token }: IContext): Promise<ICity[]> => {
			const result = await searchManyCity(data, token!);
			return result;
		},
	},
	City: {
		estate: async (parent: ICity, _: object, { token }: IContext): Promise<IEstate | null> => {
			const { estateId } = parent;
			const result = await searchOneEstate({ id: estateId }, token!);
			return result;
		},
	}
};
