import { ICreateEstate, ISearchEstate } from '@gmahechas/erp-common';
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
		searchOneEstate: asyncMiddleware(async (parent: any, args: ISearchEstate, context: IContext) => {
			return ({
				id: '2',
				estateName: 'Quintanarro',
				estateCode: 'QUIN',
				countryId: '2',
				country: {
					id: '2',
					countryName: 'Mexico',
					countryCode: 'MX'
				}
			});
		})
	},
	Mutation: {
		createOneEstate: asyncMiddleware(async (parent: any, args: ICreateEstate, context: IContext) => {
			const { estateName, estateCode, countryId } = args;
			return {
				id: '1',
				estateName,
				estateCode,
				countryId,
				country: {
					id: '2',
					countryName: 'Mexico',
					countryCode: 'MX'
				}
			};
		})
	}
};
