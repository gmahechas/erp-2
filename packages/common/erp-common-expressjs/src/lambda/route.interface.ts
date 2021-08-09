import { IRequest, IResponse } from '../interfaces';

export enum httpMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
};

export interface IRoute {
	httpMethod: httpMethods;
	path: string;
 	action: (request: IRequest) => Promise<IResponse>;
}