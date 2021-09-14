import util from 'util';
import { gql } from '@gmahechas/erp-common-graphqljs';
import { ICreateCountry } from '@gmahechas/erp-common';
import { countryClient } from '../../grpc-client';

const createOneCountry = util.promisify(countryClient.createOne).bind(countryClient);

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
		searchOneCountry: () => {
			return ({
				id: '1',
				countryName: 'Colombia',
				countryCode: 'CO'
			});
		}
	},
	Mutation: {
		createOneCountry: async (parent: any, args: ICreateCountry) => {
			try {
				const result = await createOneCountry(args);
				return result?.data;
			} catch (error) {
				throw error;
			}
		}
	}
};