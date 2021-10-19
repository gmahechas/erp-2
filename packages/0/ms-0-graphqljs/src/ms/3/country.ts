import { axiosClient, IResponse } from '@gmahechas/erp-common';
import { gql, IContext, asyncMiddleware } from '@gmahechas/erp-common-graphqljs';

export const typeDefs = gql`
	type Country {
		id: String
  	countryName: String
  	countryCode: String
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
		searchOneCountry: (parent: any, args: any, context: IContext) => {
			return ({
				id: '1',
				countryName: 'Colombia',
				countryCode: 'CO'
			});
		}
	},
	Mutation: {
		createOneCountry: asyncMiddleware(async (parent: any, args: any, context: IContext) => {
			const { data: response } = await axiosClient('http://localhost:50003').post<{ data: IResponse }>('/rest/v1/3/country/create/one', args);
			const { id, countryName, countryCode } = response.data as any;
			return ({ id, countryName, countryCode });
		})
	}
};