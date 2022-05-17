import { IPolicy, ICreatePolicy, IUpdatePolicy, IDeletePolicy, ISearchPolicy } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { createOnePolicy, updateOnePolicy, deleteOnePolicy, searchOnePolicy, searchManyPolicy } from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
	type Policy {
		id: String
    policyName: String
		service: String
		actions: [String]
	}

	input CreateOnePolicy {
    policyName: String
		service: String
		actions: [String]
	}
	input UpdateOnePolicy {
		id: String
    policyName: String
		service: String
		actions: [String]
	}
	input DeleteOnePolicy {
		id: String
	}
	input SearchOnePolicy {
		id: String
    policyName: String
		service: String
		actions: [String]
	}
	
	type Mutation {
  	createOnePolicy(data: CreateOnePolicy): Policy @authentication
		updateOnePolicy(data: UpdateOnePolicy): Policy @authentication
		deleteOnePolicy(data: DeleteOnePolicy): Policy @authentication
	}
  type Query {
  	searchOnePolicy(data: SearchOnePolicy): Policy @authentication
		searchManyPolicy(data: [SearchOnePolicy]): [Policy] @authentication
	}
`;

export const resolvers = {
	Mutation: {
		createOnePolicy: async (_: any, { data }: { data: ICreatePolicy }, { token }: IContext): Promise<IPolicy> => {
			const result = await createOnePolicy(data, token!);
			return result;
		},
		updateOnePolicy: async (_: any, { data }: { data: IUpdatePolicy }, { token }: IContext): Promise<IPolicy | null> => {
			const result = await updateOnePolicy(data, token!);
			return result;
		},
		deleteOnePolicy: async (_: any, { data }: { data: IDeletePolicy }, { token }: IContext): Promise<IPolicy | null> => {
			const result = await deleteOnePolicy(data, token!);
			return result;
		},
	},
	Query: {
		searchOnePolicy: async (_: object, { data }: { data: Partial<ISearchPolicy> }, { token }: IContext): Promise<IPolicy | null> => {
			const result = await searchOnePolicy(data, token!);
			return result;
		},
		searchManyPolicy: async (_: object, { data }: { data: Partial<ISearchPolicy>[] }, { token }: IContext): Promise<IPolicy[]> => {
			const result = await searchManyPolicy(data, token!);
			return result;
		},
	}
};