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
  	createOnePolicy(data: CreateOnePolicy): Policy @authentication @logger
		updateOnePolicy(data: UpdateOnePolicy): Policy @authentication @logger
		deleteOnePolicy(data: DeleteOnePolicy): Policy @authentication @logger
	}
  type Query {
  	searchOnePolicy(data: SearchOnePolicy): Policy @authentication @logger
		searchManyPolicy(data: [SearchOnePolicy]): [Policy] @authentication @logger
	}
`;

export const resolvers = {
	Mutation: {
		createOnePolicy: async (_: any, { data }: { data: ICreatePolicy }, context: IContext): Promise<IPolicy> => {
			const result = await createOnePolicy(data);
			return result;
		},
		updateOnePolicy: async (_: any, { data }: { data: IUpdatePolicy }, context: IContext): Promise<IPolicy | null> => {
			const result = await updateOnePolicy(data);
			return result;
		},
		deleteOnePolicy: async (_: any, { data }: { data: IDeletePolicy }, context: IContext): Promise<IPolicy | null> => {
			const result = await deleteOnePolicy(data);
			return result;
		},
	},
	Query: {
		searchOnePolicy: async (_: object, { data }: { data: Partial<ISearchPolicy> }, context: IContext): Promise<IPolicy | null> => {
			const result = await searchOnePolicy(data);
			return result;
		},
		searchManyPolicy: async (_: object, { data }: { data: Partial<ISearchPolicy>[] }, context: IContext): Promise<IPolicy[]> => {
			const result = await searchManyPolicy(data);
			return result;
		},
	}
};