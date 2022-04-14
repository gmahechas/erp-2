import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser, IGroup, IPolicy } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser, searchManyGroup, searchManyPolicy } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type User {
		id: String
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
		id: String
    userName: String
    userPassword: String
		groups: [String]
		policies: [String]
	}
	input DeleteOneUser {
		id: String
	}
	input SearchOneUser {
		id: String
    userName: String
	}
	
	type Mutation {
  	createOneUser(data: CreateOneUser): User
		updateOneUser(data: UpdateOneUser): User
		deleteOneUser(data: DeleteOneUser): User
	}
  type Query {
  	searchOneUser(data: SearchOneUser): User
		searchManyUser(data: [SearchOneUser]): [User]
	}
`;

export const resolvers = {
	Mutation: {
		createOneUser: async (_: any, { data }: { data: ICreateUser }, { token }: IContext): Promise<IUser> => {
			const result = await createOneUser(data, token!);
			return result;
		},
		updateOneUser: async (_: any, { data }: { data: IUpdateUser }, { token }: IContext): Promise<IUser | null> => {
			const result = await updateOneUser(data, token!);
			return result;
		},
		deleteOneUser: async (_: any, { data }: { data: IDeleteUser }, { token }: IContext): Promise<IUser | null> => {
			const result = await deleteOneUser(data, token!);
			return result;
		},
	},
	Query: {
		searchOneUser: async (_: object, { data }: { data: Partial<ISearchUser> }, { token }: IContext): Promise<IUser | null> => {
			const result = await searchOneUser(data, token!);
			return result;
		},
		searchManyUser: async (_: object, { data }: { data: Partial<ISearchUser>[] }, { token }: IContext): Promise<IUser[]> => {
			const result = await searchManyUser(data, token!);
			return result;
		},
	},
	User: {
		groups: async (parent: IUser, _: any, { token }: IContext): Promise<IGroup[]> => {
			const { groups } = parent;
			const ids = groups.length == 0 ? [{ id: '' }] : groups.map(id => ({ id }));
			const result = await searchManyGroup(ids, token!);
			return result;
		},
		policies: async (parent: IUser, _: any, { token }: IContext): Promise<IPolicy[]> => {
			const { policies } = parent;
			const ids = policies.length == 0 ? [{ id: '' }] : policies.map(id => ({ id }));
			const result = await searchManyPolicy(ids, token!);
			return result;
		}
	}
};