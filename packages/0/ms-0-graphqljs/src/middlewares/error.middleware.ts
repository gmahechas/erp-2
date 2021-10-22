import { CustomError, axios } from '@gmahechas/erp-common-ms-utils-js';
import { GraphQLError } from '@gmahechas/erp-common-graphqljs';

export const errorMiddleware = (error: any): any => {
	if (error instanceof CustomError) { // local error like auth
		return { ...error.serializeErrors() };
	} else if (error instanceof GraphQLError) { // graphql itself like http request/grpc
		const { originalError } = error as any;
		if (axios.isAxiosError(originalError)) { // axios
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
	}
}