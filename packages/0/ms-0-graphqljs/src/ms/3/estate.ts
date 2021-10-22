import { ICountry, ICreateEstate, IEstate, ISearchEstate } from '@gmahechas/erp-common';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { searchOneEstate, createOneEstate, searchOneCountry } from '@gmahechas/erp-common-ms-0-js';

import { asyncMiddleware } from '../../middlewares/async.middleware';
import { asyncChainMiddleware } from '../../middlewares/async-chain.middleware';

export const typeDefs = gql`
	type Estate {
		id: String
  	estateName: String
  	estateCode: String
  	countryId: String
		country: Country
	}

  type Query {
  	searchOneEstate: Estate
	}

	type Mutation {
  	createOneEstate(estateName: String, estateCode: String, countryId: String): Estate
	}
`;

export const resolvers = {
	Query: {
		searchOneEstate: asyncMiddleware(async (_: object, args: ISearchEstate, context: IContext): Promise<IEstate> => {
			return await searchOneEstate(args);
		})
	},
	Mutation: {
		createOneEstate: asyncMiddleware(async (_: object, args: ICreateEstate, context: IContext): Promise<IEstate> => {
			return await createOneEstate(args);
		})
	},
	Estate: {
		country: asyncChainMiddleware(async (parent: IEstate, _: object, context: IContext): Promise<ICountry> => {
			return await searchOneCountry({ id: parent.countryId });
		})
	},
};
