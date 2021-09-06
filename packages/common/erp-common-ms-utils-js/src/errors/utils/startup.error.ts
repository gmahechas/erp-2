import { CustomError } from '../custom.error';

export const startupError = (error: any | Error) => {
	if (error instanceof CustomError) {
		console.log({ statusCode: error.statusCode, error: error.serializeErrors() });
	} else {
		console.log({ statusCode: 500, error: 'unknown' });
	}
}