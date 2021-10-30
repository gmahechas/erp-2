import { ICountry, ICreateEstate, IDeleteEstate, IEstate, ISearchEstate, IUpdateEstate } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate, searchManyEstate, searchOneCountry } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Estate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
		country: Country
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
	}
	input SearchManyEstate {
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
		searchManyEstate(data: [SearchManyEstate]): [Estate]
	}
`;

export const resolvers = {
	Mutation: {
		createOneEstate: async (_: object, { data }: { data: ICreateEstate }, context: IContext): Promise<IEstate> => {
			return await createOneEstate(data);
		},
		updateOneEstate: async (_: any, { data }: { data: IUpdateEstate }, context: IContext): Promise<IEstate | null> => {
			return await updateOneEstate(data);
		},
		deleteOneEstate: async (_: any, { data }: { data: IDeleteEstate }, context: IContext): Promise<IEstate | null> => {
			return await deleteOneEstate(data);
		}
	},
	Query: {
		searchOneEstate: async (_: object, { data }: { data: ISearchEstate }, context: IContext): Promise<IEstate | null> => {
			return await searchOneEstate(data);
		},
		searchManyEstate: async (_: object, { data }: { data: ISearchEstate[] }, context: IContext): Promise<IEstate[]> => {
			return await searchManyEstate(data);
		}
	},
	Estate: {
		country: async (parent: IEstate, _: object, context: IContext): Promise<ICountry | null> => {
			return await searchOneCountry({ id: parent.countryId });
		}
	},
};
