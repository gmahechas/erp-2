import { IGroup, ICreateGroup, IUpdateGroup, IDeleteGroup, ISearchGroup } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneGroup, updateOneGroup, deleteOneGroup, searchOneGroup, searchManyGroup } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Group {
		id: String
    groupName: String
		groupPolicies: [String]
	}

	input CreateOneGroup {
    groupName: String
		groupPolicies: [String]
	}
	input UpdateOneGroup {
		id: String
    groupName: String
		groupPolicies: [String]
	}
	input DeleteOneGroup {
		id: String
	}
	input SearchOneGroup {
		id: String
    groupName: String
	}
	
	type Mutation {
  	createOneGroup(data: CreateOneGroup): Group
		updateOneGroup(data: UpdateOneGroup): Group
		deleteOneGroup(data: DeleteOneGroup): Group
	}
  type Query {
  	searchOneGroup(data: SearchOneGroup): Group
		searchManyGroup(data: [SearchOneGroup]): [Group]
	}
`;

export const resolvers = {
	Mutation: {
		createOneGroup: async (_: any, { data }: { data: ICreateGroup }, { token }: IContext): Promise<IGroup> => {
			const result = await createOneGroup(data, token!);
			return result;
		},
		updateOneGroup: async (_: any, { data }: { data: IUpdateGroup }, { token }: IContext): Promise<IGroup | null> => {
			const result = await updateOneGroup(data, token!);
			return result;
		},
		deleteOneGroup: async (_: any, { data }: { data: IDeleteGroup }, { token }: IContext): Promise<IGroup | null> => {
			const result = await deleteOneGroup(data, token!);
			return result;
		},
	},
	Query: {
		searchOneGroup: async (_: object, { data }: { data: Partial<ISearchGroup> }, { token }: IContext): Promise<IGroup | null> => {
			const result = await searchOneGroup(data, token!);
			return result;
		},
		searchManyGroup: async (_: object, { data }: { data: Partial<ISearchGroup>[] }, { token }: IContext): Promise<IGroup[]> => {
			const result = await searchManyGroup(data, token!);
			return result;
		},
	}
};