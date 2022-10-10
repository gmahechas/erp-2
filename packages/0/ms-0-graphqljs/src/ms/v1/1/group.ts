import {
  IGroup,
  ICreateGroup,
  IUpdateGroup,
  IDeleteGroup,
  ISearchGroup,
  IPolicy,
} from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import {
  createOneGroupV1,
  updateOneGroupV1,
  deleteOneGroupV1,
  searchOneGroupV1,
  searchManyGroupV1,
  searchManyPolicyV1,
} from '@gmahechas/erp-common-ms-0-js';

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
    createOneGroupV1: async (
      _: any,
      { data }: { data: ICreateGroup },
    ): Promise<IGroup> => {
      const result = await createOneGroupV1(data);
      return result;
    },
    updateOneGroupV1: async (
      _: any,
      { data }: { data: IUpdateGroup },
    ): Promise<IGroup | null> => {
      const result = await updateOneGroupV1(data);
      return result;
    },
    deleteOneGroupV1: async (
      _: any,
      { data }: { data: IDeleteGroup },
    ): Promise<IGroup | null> => {
      const result = await deleteOneGroupV1(data);
      return result;
    },
  },
  Query: {
    searchOneGroupV1: async (
      _: object,
      { data }: { data: Partial<ISearchGroup> },
    ): Promise<IGroup | null> => {
      const result = await searchOneGroupV1(data);
      return result;
    },
    searchManyGroupV1: async (
      _: object,
      { data }: { data: Partial<ISearchGroup>[] },
    ): Promise<IGroup[]> => {
      const result = await searchManyGroupV1(data);
      return result;
    },
  },
  Group: {
    policies: async (parent: IGroup, _: any): Promise<IPolicy[]> => {
      const { policies } = parent;
      const ids =
        policies.length == 0
          ? [{ policyId: '' }]
          : policies.map((policyId) => ({ policyId }));
      const result = await searchManyPolicyV1(ids);
      return result;
    },
  },
};
