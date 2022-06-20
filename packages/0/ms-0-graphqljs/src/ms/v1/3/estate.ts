import { ICreateEstate, IDeleteEstate, IEstate, ISearchEstate, IUpdateEstate, ICountry, ICity } from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate, searchManyEstate, searchOneCountry, searchManyCity } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Estate {
		estateId: String
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
		estateId: String
  	estateName: String
  	estateCode: String
  	countryId: String
	}
	input DeleteOneEstate {
		estateId: String
	}
	input SearchOneEstate {
		estateId: String
  	estateName: String
  	estateCode: String
  	countryId: String
	}

	type Mutation {
  	createOneEstate(data: CreateOneEstate): Estate @authentication @logger
		updateOneEstate(data: UpdateOneEstate): Estate @authentication @logger
		deleteOneEstate(data: DeleteOneEstate): Estate @authentication @logger
	}
  type Query {
  	searchOneEstate(data: SearchOneEstate): Estate @authentication @logger
		searchManyEstate(data: [SearchOneEstate]): [Estate] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneEstate: async (_: object, { data }: { data: ICreateEstate }): Promise<IEstate> => {
			const result = await createOneEstate(data);
			return result;
		},
		updateOneEstate: async (_: any, { data }: { data: IUpdateEstate }): Promise<IEstate | null> => {
			const result = await updateOneEstate(data);
			return result;
		},
		deleteOneEstate: async (_: any, { data }: { data: IDeleteEstate }): Promise<IEstate | null> => {
			const result = await deleteOneEstate(data);
			return result;
		},
	},
	Query: {
		searchOneEstate: async (_: object, { data }: { data: Partial<ISearchEstate> }): Promise<IEstate | null> => {
			const result = await searchOneEstate(data);
			return result;
		},
		searchManyEstate: async (_: object, { data }: { data: Partial<ISearchEstate>[] }): Promise<IEstate[]> => {
			const result = await searchManyEstate(data);
			return result;
		},
	},
	Estate: {
		country: async (parent: IEstate, _: object): Promise<ICountry | null> => {
			const { countryId } = parent;
			const result = await searchOneCountry({ countryId });
			return result;
		},
		cities: async (parent: IEstate, _: object): Promise<ICity[]> => {
			const { estateId } = parent;
			const result = await searchManyCity([{ estateId }]);
			return result;
		}
	}
};
