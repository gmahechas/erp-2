import { IContext } from '@gmahechas/erp-common-graphqljs';

type AsyncFunction = (parent: any, args: any, context: IContext) => Promise<any>;

export const asyncChainMiddleware = (execution: AsyncFunction) => async (parent: any, args: any, context: IContext) => {
	try {
		return await execution(parent, args, context);
	} catch (err: any) {
		return null;	
	}
}