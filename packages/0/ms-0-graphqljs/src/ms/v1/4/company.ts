import { ICompany, ICreateCompany, IUpdateCompany, IDeleteCompany, ISearchCompany } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
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
  	createOneCompany(data: CreateOneCompany): Company @authentication
		updateOneCompany(data: UpdateOneCompany): Company @authentication
		deleteOneCompany(data: DeleteOneCompany): Company @authentication
	}
  type Query {
  	searchOneCompany(data: SearchOneCompany): Company @authentication
		searchManyCompany(data: [SearchOneCompany]): [Company] @authentication
	}
`;

export const resolvers = {
	Mutation: {
		createOneCompany: async (_: any, { data }: { data: ICreateCompany }, { token }: IContext): Promise<ICompany> => {
			const result = await createOneCompany(data, token!);
			return result;
		},
		updateOneCompany: async (_: any, { data }: { data: IUpdateCompany }, { token }: IContext): Promise<ICompany | null> => {
			const result = await updateOneCompany(data, token!);
			return result;
		},
		deleteOneCompany: async (_: any, { data }: { data: IDeleteCompany }, { token }: IContext): Promise<ICompany | null> => {
			const result = await deleteOneCompany(data, token!);
			return result;
		}
	},
	Query: {
		searchOneCompany: async (_: object, { data }: { data: Partial<ISearchCompany> }, { token }: IContext): Promise<ICompany | null> => {
			const result = await searchOneCompany(data, token!);
			return result;
		},
		searchManyCompany: async (_: object, { data }: { data: Partial<ISearchCompany>[] }, { token }: IContext): Promise<ICompany[]> => {
			const result = await searchManyCompany(data, token!);
			return result;
		}
	},
};