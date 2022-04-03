import { ICreateEstate, IDeleteEstate, IEstate, ISearchEstate, IUpdateEstate, ICountry, ICity } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate, searchManyEstate, searchOneCountry, searchManyCity } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Estate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
		country: Country
		cities: [City]
	}

	input CreateOneEstate {
  	estateName: String
  	estateCode: String
  	countryId: String
	}
	input UpdateOneEstate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
	}
	input DeleteOneEstate {
		id: String
	}
	input SearchOneEstate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
	}

	type Mutation {
  	createOneEstate(data: CreateOneEstate): Estate
		updateOneEstate(data: UpdateOneEstate): Estate
		deleteOneEstate(data: DeleteOneEstate): Estate
	}
  type Query {
  	searchOneEstate(data: SearchOneEstate): Estate
		searchManyEstate(data: [SearchOneEstate]): [Estate]
	}
`;

export const resolvers = {
	Mutation: {
		createOneEstate: async (_: object, { data }: { data: ICreateEstate }, { token }: IContext): Promise<IEstate> => {
			const result = await createOneEstate(token!, data);
			return result;
		},
		updateOneEstate: async (_: any, { data }: { data: IUpdateEstate }, { token }: IContext): Promise<IEstate | null> => {
			const result = await updateOneEstate(token!, data);
			return result;
		},
		deleteOneEstate: async (_: any, { data }: { data: IDeleteEstate }, { token }: IContext): Promise<IEstate | null> => {
			const result = await deleteOneEstate(token!, data);
			return result;
		},
	},
	Query: {
		searchOneEstate: async (_: object, { data }: { data: Partial<ISearchEstate> }, { token }: IContext): Promise<IEstate | null> => {
			const result = await searchOneEstate(token!, data);
			return result;
		},
		searchManyEstate: async (_: object, { data }: { data: Partial<ISearchEstate>[] }, { token }: IContext): Promise<IEstate[]> => {
			const result = await searchManyEstate(token!, data);
			return result;
		},
	},
	Estate: {
		country: async (parent: IEstate, _: object, { token }: IContext): Promise<ICountry | null> => {
			const result = await searchOneCountry(token!, { id: parent.countryId });
			return result;
		},
		cities: async (parent: IEstate, _: object, { token }: IContext): Promise<ICity[]> => {
			const result = await searchManyCity(token!, [{ estateId: parent.id }]);
			return result;
		}
	}
};
