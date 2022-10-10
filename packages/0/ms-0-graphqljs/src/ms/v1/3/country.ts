import {
  ICountry,
  ICreateCountry,
  IUpdateCountry,
  IDeleteCountry,
  IEstate,
  ISearchCountry,
} from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import {
  createOneCountryV1,
  updateOneCountryV1,
  deleteOneCountryV1,
  searchOneCountryV1,
  searchManyCountryV1,
  searchManyEstateV1,
} from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
  type Country {
    countryId: String
    countryName: String
    countryCode: String
    estates: [Estate]
  }

  input CreateOneCountry {
    countryName: String
    countryCode: String
  }
  input UpdateOneCountry {
    countryId: String
    countryName: String
    countryCode: String
  }
  input DeleteOneCountry {
    countryId: String
  }
  input SearchOneCountry {
    countryId: String
    countryName: String
    countryCode: String
  }

  type Mutation {
    createOneCountryV1(data: CreateOneCountry): Country @authentication @logger
    updateOneCountryV1(data: UpdateOneCountry): Country @authentication @logger
    deleteOneCountryV1(data: DeleteOneCountry): Country @authentication @logger
  }
  type Query {
    searchOneCountryV1(data: SearchOneCountry): Country @authentication @logger
    searchManyCountryV1(data: [SearchOneCountry]): [Country]
      @authentication
      @logger
  }
`;

export const resolvers = {
  Mutation: {
    createOneCountryV1: async (
      _: any,
      { data }: { data: ICreateCountry },
    ): Promise<ICountry> => {
      const result = await createOneCountryV1(data);
      return result;
    },
    updateOneCountryV1: async (
      _: any,
      { data }: { data: IUpdateCountry },
    ): Promise<ICountry | null> => {
      const result = await updateOneCountryV1(data);
      return result;
    },
    deleteOneCountryV1: async (
      _: any,
      { data }: { data: IDeleteCountry },
    ): Promise<ICountry | null> => {
      const result = await deleteOneCountryV1(data);
      return result;
    },
  },
  Query: {
    searchOneCountryV1: async (
      _: object,
      { data }: { data: Partial<ISearchCountry> },
    ): Promise<ICountry | null> => {
      const result = await searchOneCountryV1(data);
      return result;
    },
    searchManyCountryV1: async (
      _: object,
      { data }: { data: Partial<ISearchCountry>[] },
    ): Promise<ICountry[]> => {
      const result = await searchManyCountryV1(data);
      return result;
    },
  },
  Country: {
    estates: async (parent: ICountry, _: object): Promise<IEstate[]> => {
      const { countryId } = parent;
      const result = await searchManyEstateV1([{ countryId }]);
      return result;
    },
  },
};
