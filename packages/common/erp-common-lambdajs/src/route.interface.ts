import { IRequest, IResponse } from '@gmahechas/erp-common';

export enum httpMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
};

export interface IRouteLambda {
	httpMethod: httpMethods;
	path: string;
	action: (request: IRequest) => Promise<IResponse>;
	validation: any
}