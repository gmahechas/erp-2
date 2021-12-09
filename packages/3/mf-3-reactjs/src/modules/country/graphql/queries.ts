import { gql } from '@apollo/client';

export const searchManyQuery = gql`
			query searchManyCountry($data: [SearchOneCountry]) {
  			searchManyCountry(data: $data) {
					id
					countryName
					countryCode
				}
			}
`;