import {
  ICreateCity,
  IDeleteCity,
  ICity,
  ISearchCity,
  IUpdateCity,
  IEstate,
} from '@gmahechas/erp-common-js';
import { gql } from '@gmahechas/erp-common-graphqljs';
import {
  createOneCityV1,
  updateOneCityV1,
  deleteOneCityV1,
  searchOneCityV1,
  searchManyCityV1,
  searchOneEstateV1,
} from '@gmahechas/erp-common-ms-0-js';

export const typeDefs = gql`
  type City {
    cityId: String
    cityName: String
    cityCode: String
    estateId: String
    estate: Estate
  }

  input CreateOneCity {
    cityName: String
    cityCode: String
    estateId: String
  }
  input UpdateOneCity {
    cityId: String
    cityName: String
    cityCode: String
    estateId: String
  }
  input DeleteOneCity {
    cityId: String
  }
  input SearchOneCity {
    cityId: String
    cityName: String
    cityCode: String
    estateId: String
  }

  type Mutation {
    createOneCityV1(data: CreateOneCity): City @authentication @logger
    updateOneCityV1(data: UpdateOneCity): City @authentication @logger
    deleteOneCityV1(data: DeleteOneCity): City @authentication @logger
  }
  type Query {
    searchOneCityV1(data: SearchOneCity): City @authentication @logger
    searchManyCityV1(data: [SearchOneCity]): [City] @authentication @logger
  }
`;

export const resolvers = {
  Mutation: {
    createOneCityV1: async (
      _: object,
      { data }: { data: ICreateCity },
    ): Promise<ICity> => {
      const result = await createOneCityV1(data);
      return result;
    },
    updateOneCityV1: async (
      _: any,
      { data }: { data: IUpdateCity },
    ): Promise<ICity | null> => {
      const result = await updateOneCityV1(data);
      return result;
    },
    deleteOneCityV1: async (
      _: any,
      { data }: { data: IDeleteCity },
    ): Promise<ICity | null> => {
      const result = await deleteOneCityV1(data);
      return result;
    },
  },
  Query: {
    searchOneCityV1: async (
      _: object,
      { data }: { data: Partial<ISearchCity> },
    ): Promise<ICity | null> => {
      const result = await searchOneCityV1(data);
      return result;
    },
    searchManyCityV1: async (
      _: object,
      { data }: { data: Partial<ISearchCity>[] },
    ): Promise<ICity[]> => {
      const result = await searchManyCityV1(data);
      return result;
    },
  },
  City: {
    estate: async (parent: ICity, _: object): Promise<IEstate | null> => {
      const { estateId } = parent;
      const result = await searchOneEstateV1({ estateId });
      return result;
    },
  },
};
