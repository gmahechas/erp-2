import { ICountry, ICreateCountry, IEstate, ISearchCountry } from '@gmahechas/erp-common-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';

export const typeDefs = gql`
  type Country {
    id: String
    countryName: String
    countryCode: String
    estates: [Estate]
  }
  type Query {
    searchOneCountry: Country
  }
  type Mutation {
    createOneCountry(countryName: String, countryCode: String): Country
  }
`;

export const resolvers = {
  Query: {
    searchOneCountry: async (_: object, args: ISearchCountry, context: IContext): Promise<ICountry> => {
      return { id: '1', countryName: 'Colombia', countryCode: 'CO' };
    },
  },
  Mutation: {
    createOneCountry: async (_: any, args: ICreateCountry, context: IContext): Promise<ICountry> => {
      const { countryName, countryCode } = args;
      return { id: '1', countryName, countryCode };
    },
  },
  Country: {
    estates: async (parent: ICountry, _: object, context: IContext): Promise<IEstate[]> => {
      return [{ id: '2', estateName: 'Quintanarro', estateCode: 'QUIN', countryId: '1' }];
    },
  },
};
