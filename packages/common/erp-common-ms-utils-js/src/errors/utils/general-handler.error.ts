import { CustomError } from '../custom.error';
import mongoose from 'mongoose';

export const generalHandlerError = (error: any | Error) => {
	if (error instanceof CustomError) {
		console.log({ statusCode: error.statusCode, error: error.serializeErrors() });
	} else if (error instanceof mongoose.Error) {
		console.log({ statusCode: 500, error: { type: 'database: Something went wrong :(' } });
	} else {
		console.log({ statusCode: 500, error: { type: 'unknown: Something went wrong :(' } });
	}
}