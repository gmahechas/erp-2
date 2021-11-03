import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type User {
		id: String
    userName: String
    userPassword: String
    personId: String
	}

	input CreateOneUser {
    userName: String
    userPassword: String
    personId: String
	}
	input UpdateOneUser {
		id: String
    userName: String
    userPassword: String
    personId: String
	}
	input DeleteOneUser {
		id: String
	}
	input SearchOneUser {
		id: String
    userName: String
    personId: String
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
		createOneUser: async (_: any, { data }: { data: ICreateUser }, context: IContext): Promise<IUser> => {
			const result = await createOneUser(data);
			return result;
		},
		updateOneUser: async (_: any, { data }: { data: IUpdateUser }, context: IContext): Promise<IUser | null> => {
			const result = await updateOneUser(data);
			return result;
		},
		deleteOneUser: async (_: any, { data }: { data: IDeleteUser }, context: IContext): Promise<IUser | null> => {
			const result = await deleteOneUser(data);
			return result;
		}
	},
	Query: {
		searchOneUser: async (_: object, { data }: { data: Partial<ISearchUser> }, context: IContext): Promise<IUser | null> => {
			const result = await searchOneUser(data);
			return result;
		},
		searchManyUser: async (_: object, { data }: { data: Partial<ISearchUser>[] }, context: IContext): Promise<IUser[]> => {
			const result = await searchManyUser(data);
			return result;
		}
	}
};