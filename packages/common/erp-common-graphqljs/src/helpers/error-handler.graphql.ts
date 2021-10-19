import { GraphQLError } from 'graphql';
import { CustomError } from '@gmahechas/erp-common-ms-utils-js';

export const errorHandlerGraphQL = (error: GraphQLError): any => {
	const { originalError } = error as any;
	if (originalError instanceof CustomError) {
		return { ...originalError.serializeErrors() }
	} else if (originalError.details) { // grpc
		if (originalError.details.startsWith('{')) {
			const errorParsed = JSON.parse(originalError.details);
			return { type: errorParsed.type, errors: errorParsed.errors }
		}
		return { type: originalError.details }
	} else {
		return { type: 'unknown: Something went wrong :(' }
	}
}