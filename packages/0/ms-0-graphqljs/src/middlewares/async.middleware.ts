import { sendError, AxiosError} from '@gmahechas/erp-common-ms-utils-js';
import { IContext } from '@gmahechas/erp-common-graphqljs';

type AsyncFunction = (parent: any, args: any, context: IContext) => Promise<any>;

export const asyncMiddleware = (execution: AsyncFunction) => async (parent: any, args: any, context: IContext) => {
	try {
		return await execution(parent, args, context);
	} catch (err: any) {
		const { response } = err as AxiosError;
		if (response) {
			const { data } = response;
			const parsedData = JSON.parse(JSON.stringify(data));
			console.log(parsedData)
			const { type, errors } = parsedData.error;
			sendError(type, errors);
		} else {
			return err;
		}
	}
}