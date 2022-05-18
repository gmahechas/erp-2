import { GraphQLError } from 'graphql';
import { CustomError, axios } from '@gmahechas/erp-common-ms-utils-js';

export const createFormatError = (error: GraphQLError | CustomError): any => {
	if (error instanceof GraphQLError) { // graphql itself like http request/grpc
		const { originalError } = error as any;
		if (originalError instanceof CustomError) {
			return { ...originalError.serializeErrors() };
		} else if (axios.isAxiosError(originalError)) { // axios
			const { response } = originalError;
			if (response) {
				const { data } = response;
				const parsedData = JSON.parse(JSON.stringify(data));
				const { type, errors } = parsedData.error;
				return { type, errors };
			} else {
				return { type: 'unknown: Something went wrong with :(' }
			}
		} else if (originalError.details) { // grpc
			if (originalError.details.startsWith('{')) {
				const errorParsed = JSON.parse(originalError.details);
				return { type: errorParsed.type, errors: errorParsed.errors }
			}
			return { type: originalError.details }
		}
	} else if (error instanceof CustomError) { // local error like auth
		return { ...error.serializeErrors() };
	}
}