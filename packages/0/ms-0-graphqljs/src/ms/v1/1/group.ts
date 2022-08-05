import { IGroup, ICreateGroup, IUpdateGroup, IDeleteGroup, ISearchGroup, IPolicy } from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import { createOneGroup, updateOneGroup, deleteOneGroup, searchOneGroup, searchManyGroup, searchManyPolicy } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Group {
		groupId: String
    groupName: String
		policies: [Policy]
	}

	input CreateOneGroup {
    groupName: String
		policies: [String]
	}
	input UpdateOneGroup {
		groupId: String
    groupName: String
		policies: [String]
	}
	input DeleteOneGroup {
		groupId: String
	}
	input SearchOneGroup {
		groupId: String
    groupName: String
	}
	
	type Mutation {
  	createOneGroupV1(data: CreateOneGroup): Group @authentication @logger
		updateOneGroupV1(data: UpdateOneGroup): Group @authentication @logger
		deleteOneGroupV1(data: DeleteOneGroup): Group @authentication @logger
	}
  type Query {
  	searchOneGroupV1(data: SearchOneGroup): Group @authentication @logger
		searchManyGroupV1(data: [SearchOneGroup]): [Group] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneGroupV1: async (_: any, { data }: { data: ICreateGroup }): Promise<IGroup> => {
			const result = await createOneGroup(data);
			return result;
		},
		updateOneGroupV1: async (_: any, { data }: { data: IUpdateGroup }): Promise<IGroup | null> => {
			const result = await updateOneGroup(data);
			return result;
		},
		deleteOneGroupV1: async (_: any, { data }: { data: IDeleteGroup }): Promise<IGroup | null> => {
			const result = await deleteOneGroup(data);
			return result;
		},
	},
	Query: {
		searchOneGroupV1: async (_: object, { data }: { data: Partial<ISearchGroup> }): Promise<IGroup | null> => {
			const result = await searchOneGroup(data);
			return result;
		},
		searchManyGroupV1: async (_: object, { data }: { data: Partial<ISearchGroup>[] }): Promise<IGroup[]> => {
			const result = await searchManyGroup(data);
			return result;
		},
	},
	Group: {
		policies: async (parent: IGroup, _: any): Promise<IPolicy[]> => {
			const { policies } = parent;
			const ids = policies.length == 0 ? [{ policyId: '' }] : policies.map(policyId => ({ policyId }));
			const result = await searchManyPolicy(ids);
			return result;
		}
	}
};