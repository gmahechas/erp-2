import { ICreateCity, IDeleteCity, ICity, ISearchCity, IUpdateCity } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneCity, updateOneCity, deleteOneCity, searchOneCity, searchManyCity } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type City {
		id: String
  	cityName: String
  	cityCode: String
  	estateId: String
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
  	createOneCity(data: CreateOneCity): City
		updateOneCity(data: UpdateOneCity): City
		deleteOneCity(data: DeleteOneCity): City
	}
  type Query {
  	searchOneCity(data: SearchOneCity): City
		searchManyCity(data: [SearchOneCity]): [City]
	}
`;

export const resolvers = {
	Mutation: {
		createOneCity: async (_: object, { data }: { data: ICreateCity }, context: IContext): Promise<ICity> => {
			const result = await createOneCity(data);
			return result;
		},
		updateOneCity: async (_: any, { data }: { data: IUpdateCity }, context: IContext): Promise<ICity | null> => {
			const result = await updateOneCity(data);
			return result;
		},
		deleteOneCity: async (_: any, { data }: { data: IDeleteCity }, context: IContext): Promise<ICity | null> => {
			const result = await deleteOneCity(data);
			return result;
		}
	},
	Query: {
		searchOneCity: async (_: object, { data }: { data: Partial<ISearchCity> }, context: IContext): Promise<ICity | null> => {
			const result = await searchOneCity(data);
			return result;
		},
		searchManyCity: async (_: object, { data }: { data: Partial<ISearchCity>[] }, context: IContext): Promise<ICity[]> => {
			const result = await searchManyCity(data);
			return result;
		}
	},
};
