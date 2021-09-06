import { mongodb } from '@gmahechas/erp-common-ms-utils-js';
import env from '../config/env';

export const connectDatabases = async () => {
	await mongodb(
		env.ms_mongouri,
		{ serverSelectionTimeoutMS: 500 }
	);
}