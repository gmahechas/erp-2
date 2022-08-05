import { ICreateEstate, IDeleteEstate, IEstate, ISearchEstate, IUpdateEstate, ICountry, ICity } from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import { createOneEstateV1, updateOneEstateV1, deleteOneEstateV1, searchOneEstateV1, searchManyEstateV1, searchOneCountryV1, searchManyCityV1 } from '@gmahechas/erp-common-ms-0-js';

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
  	createOneEstateV1(data: CreateOneEstate): Estate @authentication @logger
		updateOneEstateV1(data: UpdateOneEstate): Estate @authentication @logger
		deleteOneEstateV1(data: DeleteOneEstate): Estate @authentication @logger
	}
  type Query {
  	searchOneEstateV1(data: SearchOneEstate): Estate @authentication @logger
		searchManyEstateV1(data: [SearchOneEstate]): [Estate] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneEstateV1: async (_: object, { data }: { data: ICreateEstate }): Promise<IEstate> => {
			const result = await createOneEstateV1(data);
			return result;
		},
		updateOneEstateV1: async (_: any, { data }: { data: IUpdateEstate }): Promise<IEstate | null> => {
			const result = await updateOneEstateV1(data);
			return result;
		},
		deleteOneEstateV1: async (_: any, { data }: { data: IDeleteEstate }): Promise<IEstate | null> => {
			const result = await deleteOneEstateV1(data);
			return result;
		},
	},
	Query: {
		searchOneEstateV1: async (_: object, { data }: { data: Partial<ISearchEstate> }): Promise<IEstate | null> => {
			const result = await searchOneEstateV1(data);
			return result;
		},
		searchManyEstateV1: async (_: object, { data }: { data: Partial<ISearchEstate>[] }): Promise<IEstate[]> => {
			const result = await searchManyEstateV1(data);
			return result;
		},
	},
	Estate: {
		country: async (parent: IEstate, _: object): Promise<ICountry | null> => {
			const { countryId } = parent;
			const result = await searchOneCountryV1({ countryId });
			return result;
		},
		cities: async (parent: IEstate, _: object): Promise<ICity[]> => {
			const { estateId } = parent;
			const result = await searchManyCityV1([{ estateId }]);
			return result;
		}
	}
};
