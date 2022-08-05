import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser, IGroup, IPolicy } from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser, searchManyGroup, searchManyPolicy } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type User {
		userId: String
    userName: String
		groups: [Group]
		policies: [Policy]
	}

	input CreateOneUser {
    userName: String
    userPassword: String
		groups: [String]
		policies: [String]
	}
	input UpdateOneUser {
		userId: String
    userName: String
    userPassword: String
		groups: [String]
		policies: [String]
	}
	input DeleteOneUser {
		userId: String
	}
	input SearchOneUser {
		userId: String
    userName: String
	}
	
	type Mutation {
  	createOneUserV1(data: CreateOneUser): User @authentication @logger
		updateOneUserV1(data: UpdateOneUser): User @authentication @logger
		deleteOneUserV1(data: DeleteOneUser): User @authentication @logger
	}
  type Query {
  	searchOneUserV1(data: SearchOneUser): User @authentication @logger
		searchManyUserV1(data: [SearchOneUser]): [User] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneUserV1: async (_: any, { data }: { data: ICreateUser }): Promise<IUser> => {
			const result = await createOneUser(data);
			return result;
		},
		updateOneUserV1: async (_: any, { data }: { data: IUpdateUser }): Promise<IUser | null> => {
			const result = await updateOneUser(data);
			return result;
		},
		deleteOneUserV1: async (_: any, { data }: { data: IDeleteUser }): Promise<IUser | null> => {
			const result = await deleteOneUser(data);
			return result;
		},
	},
	Query: {
		searchOneUserV1: async (_: object, { data }: { data: Partial<ISearchUser> }): Promise<IUser | null> => {
			const result = await searchOneUser(data);
			return result;
		},
		searchManyUserV1: async (_: object, { data }: { data: Partial<ISearchUser>[] }): Promise<IUser[]> => {
			const result = await searchManyUser(data);
			return result;
		},
	},
	User: {
		groups: async (parent: IUser, _: any): Promise<IGroup[]> => {
			const { groups } = parent;
			const ids = groups.length == 0 ? [{ groupId: '' }] : groups.map(groupId => ({ groupId }));
			const result = await searchManyGroup(ids);
			return result;
		},
		policies: async (parent: IUser, _: any): Promise<IPolicy[]> => {
			const { policies } = parent;
			const ids = policies.length == 0 ? [{ policyId: '' }] : policies.map(policyId => ({ policyId }));
			const result = await searchManyPolicy(ids);
			return result;
		}
	}
};