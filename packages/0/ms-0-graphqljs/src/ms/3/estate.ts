import { ICountry, ICreateEstate, IEstate, ISearchEstate } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { asyncMiddleware } from '../../middlewares/async.middleware';
import { asyncChainMiddleware } from '../../middlewares/async-chain.middleware';

import { resolvers as countryResolvers } from './country';

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
			return ({
				id: '2',
				estateName: 'Quintanarro',
				estateCode: 'QUIN',
				countryId: '2'
			});
		})
	},
	Mutation: {
		createOneEstate: asyncMiddleware(async (_: object, args: ICreateEstate, context: IContext): Promise<IEstate> => {
			const { data: response } = await axiosClient('http://localhost:50003').post<{ data: IEstate }>('/rest/v1/3/estate/create/one', args);
			return response.data;
		})
	},
	Estate: {
		country: asyncChainMiddleware(async (parent: IEstate, _: object, context: IContext): Promise<ICountry> => {
			return await countryResolvers.Query.searchOneCountry({}, parent, context);
		})
	},
};
