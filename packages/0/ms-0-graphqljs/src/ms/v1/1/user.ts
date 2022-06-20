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
  	createOneUser(data: CreateOneUser): User @authentication @logger
		updateOneUser(data: UpdateOneUser): User @authentication @logger
		deleteOneUser(data: DeleteOneUser): User @authentication @logger
	}
  type Query {
  	searchOneUser(data: SearchOneUser): User @authentication @logger
		searchManyUser(data: [SearchOneUser]): [User] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOneUser: async (_: any, { data }: { data: ICreateUser }): Promise<IUser> => {
			const result = await createOneUser(data);
			return result;
		},
		updateOneUser: async (_: any, { data }: { data: IUpdateUser }): Promise<IUser | null> => {
			const result = await updateOneUser(data);
			return result;
		},
		deleteOneUser: async (_: any, { data }: { data: IDeleteUser }): Promise<IUser | null> => {
			const result = await deleteOneUser(data);
			return result;
		},
	},
	Query: {
		searchOneUser: async (_: object, { data }: { data: Partial<ISearchUser> }): Promise<IUser | null> => {
			const result = await searchOneUser(data);
			return result;
		},
		searchManyUser: async (_: object, { data }: { data: Partial<ISearchUser>[] }): Promise<IUser[]> => {
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