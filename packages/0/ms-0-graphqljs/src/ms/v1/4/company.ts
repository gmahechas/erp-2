import { ICompany, ICreateCompany, IUpdateCompany, IDeleteCompany, ISearchCompany } from '@gmahechas/erp-common';
import { gql } from '@gmahechas/erp-common-graphqljs';
import { createOneCompany, updateOneCompany, deleteOneCompany, searchOneCompany, searchManyCompany } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Company {
		id: String
  	companyName: String
  	companyIdentification: String
  	companyKey: String
  	cityId: String
	}

	input CreateOneCompany {
  	companyName: String
  	companyIdentification: String
  	companyKey: String
  	cityId: String
	}
	input UpdateOneCompany {
		id: String
  	companyName: String
  	companyIdentification: String
  	companyKey: String
  	cityId: String
	}
	input DeleteOneCompany {
		id: String
	}
	input SearchOneCompany {
		id: String
  	companyName: String
  	companyIdentification: String
  	companyKey: String
  	cityId: String
	}
	
	type Mutation {
  	createOneCompany(data: CreateOneCompany): Company @authentication @logger
		updateOneCompany(data: UpdateOneCompany): Company @authentication @logger
		deleteOneCompany(data: DeleteOneCompany): Company @authentication @logger
	}
  type Query {
  	searchOneCompany(data: SearchOneCompany): Company @authentication @logger
		searchManyCompany(data: [SearchOneCompany]): [Company] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneCompany: async (_: any, { data }: { data: ICreateCompany }): Promise<ICompany> => {
			const result = await createOneCompany(data);
			return result;
		},
		updateOneCompany: async (_: any, { data }: { data: IUpdateCompany }): Promise<ICompany | null> => {
			const result = await updateOneCompany(data);
			return result;
		},
		deleteOneCompany: async (_: any, { data }: { data: IDeleteCompany }): Promise<ICompany | null> => {
			const result = await deleteOneCompany(data);
			return result;
		}
	},
	Query: {
		searchOneCompany: async (_: object, { data }: { data: Partial<ISearchCompany> }): Promise<ICompany | null> => {
			const result = await searchOneCompany(data);
			return result;
		},
		searchManyCompany: async (_: object, { data }: { data: Partial<ISearchCompany>[] }): Promise<ICompany[]> => {
			const result = await searchManyCompany(data);
			return result;
		}
	},
};