import { CustomError } from '@gmahechas/erp-common-ms-utils-js';
import { GraphQLError } from '@gmahechas/erp-common-graphqljs';

export const errorHandlerGraphQL = (error: GraphQLError | CustomError): any => {
	if(error instanceof GraphQLError) {
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
				return { type: 'unknown: Something went wrong :(' };
			}
		} else if (error instanceof CustomError) {
		 return { ...error.serializeErrors() }
	 } else {
		 return { type: 'unknown: Something went wrong :(' }
	 }
}