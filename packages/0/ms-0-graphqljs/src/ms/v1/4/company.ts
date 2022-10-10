import {
  ICompany,
  ICreateCompany,
  IUpdateCompany,
  IDeleteCompany,
  ISearchCompany,
} from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import {
  createOneCompanyV1,
  updateOneCompanyV1,
  deleteOneCompanyV1,
  searchOneCompanyV1,
  searchManyCompanyV1,
} from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
  type Company {
    companyId: String
    companyName: String
    companyIdentification: String
    companyKey: String
    cityId: String
  }

  input CreateOneCompany {
    companyName: String
    companyIdentification: String
    companyKey: String
    cityId: String
  }
  input UpdateOneCompany {
    companyId: String
    companyName: String
    companyIdentification: String
    companyKey: String
    cityId: String
  }
  input DeleteOneCompany {
    companyId: String
  }
  input SearchOneCompany {
    companyId: String
    companyName: String
    companyIdentification: String
    companyKey: String
    cityId: String
  }

  type Mutation {
    createOneCompanyV1(data: CreateOneCompany): Company @authentication @logger
    updateOneCompanyV1(data: UpdateOneCompany): Company @authentication @logger
    deleteOneCompanyV1(data: DeleteOneCompany): Company @authentication @logger
  }
  type Query {
    searchOneCompanyV1(data: SearchOneCompany): Company @authentication @logger
    searchManyCompanyV1(data: [SearchOneCompany]): [Company]
      @authentication
      @logger
  }
`;

export const resolvers = {
  Mutation: {
    createOneCompanyV1: async (
      _: any,
      { data }: { data: ICreateCompany },
    ): Promise<ICompany> => {
      const result = await createOneCompanyV1(data);
      return result;
    },
    updateOneCompanyV1: async (
      _: any,
      { data }: { data: IUpdateCompany },
    ): Promise<ICompany | null> => {
      const result = await updateOneCompanyV1(data);
      return result;
    },
    deleteOneCompanyV1: async (
      _: any,
      { data }: { data: IDeleteCompany },
    ): Promise<ICompany | null> => {
      const result = await deleteOneCompanyV1(data);
      return result;
    },
  },
  Query: {
    searchOneCompanyV1: async (
      _: object,
      { data }: { data: Partial<ISearchCompany> },
    ): Promise<ICompany | null> => {
      const result = await searchOneCompanyV1(data);
      return result;
    },
    searchManyCompanyV1: async (
      _: object,
      { data }: { data: Partial<ISearchCompany>[] },
    ): Promise<ICompany[]> => {
      const result = await searchManyCompanyV1(data);
      return result;
    },
  },
};
