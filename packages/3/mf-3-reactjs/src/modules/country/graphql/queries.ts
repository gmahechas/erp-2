import { gql } from '@apollo/client';

export const searchManyCountry = gql`
	query searchManyCountryV1($data: [SearchOneCountry]) {
  	searchManyCountry(data: $data) {
			countryId
			countryName
			countryCode
		}
	}
`;