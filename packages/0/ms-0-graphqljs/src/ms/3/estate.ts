import { ICountry, ICreateEstate, IEstate, ISearchEstate } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { asyncMiddleware } from '../../middlewares/async.middleware';

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
  	createOneEstate(id: String, estateName: String, estateCode: String, countryId: String): Estate
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
			const { estateName, estateCode, countryId } = args;
			return {
				id: '1',
				estateName,
				estateCode,
				countryId
			};
		})
	},
	Estate: {
		country: asyncMiddleware(async (parent: IEstate, _: object, context: IContext): Promise<ICountry> => {
			return {
				id: '2',
				countryName: 'Mexico',
				countryCode: 'MXT'
			};
		})
	},
};
