import { gql } from '@apollo/client';

export const searchManyCountry = gql`
	query searchManyCountry($data: [SearchOneCountry]) {
  	searchManyCountry(data: $data) {
			countryId
			countryName
			countryCode
		}
	}
`;