import {
  IPolicy,
  ICreatePolicy,
  IUpdatePolicy,
  IDeletePolicy,
  ISearchPolicy,
} from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import {
  createOnePolicyV1,
  updateOnePolicyV1,
  deleteOnePolicyV1,
  searchOnePolicyV1,
  searchManyPolicyV1,
} from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
  type Policy {
    policyId: String
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
    policyId: String
    policyName: String
    service: String
    actions: [String]
  }
  input DeleteOnePolicy {
    policyId: String
  }
  input SearchOnePolicy {
    policyId: String
    policyName: String
    service: String
    actions: [String]
  }

  type Mutation {
    createOnePolicyV1(data: CreateOnePolicy): Policy @authentication @logger
    updateOnePolicyV1(data: UpdateOnePolicy): Policy @authentication @logger
    deleteOnePolicyV1(data: DeleteOnePolicy): Policy @authentication @logger
  }
  type Query {
    searchOnePolicyV1(data: SearchOnePolicy): Policy @authentication @logger
    searchManyPolicyV1(data: [SearchOnePolicy]): [Policy]
      @authentication
      @logger
  }
`;

export const resolvers = {
  Mutation: {
    createOnePolicyV1: async (
      _: any,
      { data }: { data: ICreatePolicy },
    ): Promise<IPolicy> => {
      const result = await createOnePolicyV1(data);
      return result;
    },
    updateOnePolicyV1: async (
      _: any,
      { data }: { data: IUpdatePolicy },
    ): Promise<IPolicy | null> => {
      const result = await updateOnePolicyV1(data);
      return result;
    },
    deleteOnePolicyV1: async (
      _: any,
      { data }: { data: IDeletePolicy },
    ): Promise<IPolicy | null> => {
      const result = await deleteOnePolicyV1(data);
      return result;
    },
  },
  Query: {
    searchOnePolicyV1: async (
      _: object,
      { data }: { data: Partial<ISearchPolicy> },
    ): Promise<IPolicy | null> => {
      const result = await searchOnePolicyV1(data);
      return result;
    },
    searchManyPolicyV1: async (
      _: object,
      { data }: { data: Partial<ISearchPolicy>[] },
    ): Promise<IPolicy[]> => {
      const result = await searchManyPolicyV1(data);
      return result;
    },
  },
};
