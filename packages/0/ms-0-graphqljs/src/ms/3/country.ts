import { ICountry, ICreateCountry, IEstate, ISearchCountry } from '@gmahechas/erp-common';
import { axiosClient } from '@gmahechas/erp-common-ms-utils-js';
import { gql, IContext } from '@gmahechas/erp-common-graphqljs';
import { asyncMiddleware } from '../../middlewares/async.middleware';

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
		searchOneCountry: asyncMiddleware(async (_: object, args: ISearchCountry, context: IContext): Promise<ICountry> => {
			return {
				id: '1',
				countryName: 'Colombianos',
				countryCode: 'CO'
			};
		})
	},
	Mutation: {
		createOneCountry: asyncMiddleware(async (_: any, args: ICreateCountry, context: IContext): Promise<ICountry> => {
			const { data: response } = await axiosClient('http://localhost:50003').post<{ data: ICountry }>('/rest/v1/3/country/create/one', args);
			return response.data;
		})
	},
	Country: {
		estates: asyncMiddleware(async (parent: ICountry, _: object, context: IContext): Promise<IEstate[]> => {
			return [
				{ id: '2', estateName: 'Quintanarro', estateCode: 'QUIN', countryId: '1' }
			];
		})
	},
};