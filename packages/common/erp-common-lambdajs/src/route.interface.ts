/* import { IRequest, IResponse } from '../interfaces' */;

export enum httpMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
};

export interface IRouteLambda {
	httpMethod: httpMethods;
	path: string;
 	action: (request: any) => Promise<any>;
	validation: any
}