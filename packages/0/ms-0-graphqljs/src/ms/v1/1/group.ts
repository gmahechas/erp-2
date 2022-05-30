import { IGroup, ICreateGroup, IUpdateGroup, IDeleteGroup, ISearchGroup, IPolicy } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneGroup, updateOneGroup, deleteOneGroup, searchOneGroup, searchManyGroup, searchManyPolicy } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Group {
		id: String
    groupName: String
		policies: [Policy]
	}

	input CreateOneGroup {
    groupName: String
		policies: [String]
	}
	input UpdateOneGroup {
		id: String
    groupName: String
		policies: [String]
	}
	input DeleteOneGroup {
		id: String
	}
	input SearchOneGroup {
		id: String
    groupName: String
	}
	
	type Mutation {
  	createOneGroup(data: CreateOneGroup): Group @authentication @logger
		updateOneGroup(data: UpdateOneGroup): Group @authentication @logger
		deleteOneGroup(data: DeleteOneGroup): Group @authentication @logger
	}
  type Query {
  	searchOneGroup(data: SearchOneGroup): Group @authentication @logger
		searchManyGroup(data: [SearchOneGroup]): [Group] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneGroup: async (_: any, { data }: { data: ICreateGroup }, context: IContext): Promise<IGroup> => {
			const result = await createOneGroup(data);
			return result;
		},
		updateOneGroup: async (_: any, { data }: { data: IUpdateGroup }, context: IContext): Promise<IGroup | null> => {
			const result = await updateOneGroup(data);
			return result;
		},
		deleteOneGroup: async (_: any, { data }: { data: IDeleteGroup }, context: IContext): Promise<IGroup | null> => {
			const result = await deleteOneGroup(data);
			return result;
		},
	},
	Query: {
		searchOneGroup: async (_: object, { data }: { data: Partial<ISearchGroup> }, context: IContext): Promise<IGroup | null> => {
			const result = await searchOneGroup(data);
			return result;
		},
		searchManyGroup: async (_: object, { data }: { data: Partial<ISearchGroup>[] }, context: IContext): Promise<IGroup[]> => {
			const result = await searchManyGroup(data);
			return result;
		},
	},
	Group: {
		policies: async (parent: IGroup, _: any, context: IContext): Promise<IPolicy[]> => {
			const { policies } = parent;
			const ids = policies.length == 0 ? [{ id: '' }] : policies.map(id => ({ id }));
			const result = await searchManyPolicy(ids);
			return result;
		}
	}
};