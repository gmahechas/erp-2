import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type User {
		id: String
    userName: String
	}

	input CreateOneUser {
    userName: String
    userPassword: String
	}
	input UpdateOneUser {
		id: String
    userName: String
    userPassword: String
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
		createOneUser: async (_: any, { data }: { data: ICreateUser }, { token, auth }: IContext): Promise<IUser> => {
			const newData = Object.assign({}, data, { companyId: auth!.companyId, companyKey: auth!.companyKey });
			const result = await createOneUser(newData, token!);
			return result;
		},
		updateOneUser: async (_: any, { data }: { data: IUpdateUser }, { token, auth }: IContext): Promise<IUser | null> => {
			const newData = Object.assign({}, data, { companyId: auth!.companyId, companyKey: auth!.companyKey });
			const result = await updateOneUser(newData, token!);
			return result;
		},
		deleteOneUser: async (_: any, { data }: { data: IDeleteUser }, { token, auth }: IContext): Promise<IUser | null> => {
			const newData = Object.assign({}, data, { companyId: auth!.companyId, companyKey: auth!.companyKey });
			const result = await deleteOneUser(newData, token!);
			return result;
		},
	},
	Query: {
		searchOneUser: async (_: object, { data }: { data: Partial<ISearchUser> }, { token, auth }: IContext): Promise<IUser | null> => {
			const newData = Object.assign({}, data, { companyId: auth!.companyId, companyKey: auth!.companyKey });
			const result = await searchOneUser(newData, token!);
			return result;
		},
		searchManyUser: async (_: object, { data }: { data: Partial<ISearchUser>[] }, { token, auth }: IContext): Promise<IUser[]> => {
			const { companyId, companyKey } = auth!;
			const newData = data.length === 0 ? [{ companyId, companyKey }] : data.map((item) => Object.assign({}, item, { companyId, companyKey })); 
			const result = await searchManyUser(newData, token!);
			return result;
		},
	}
};