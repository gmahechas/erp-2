export enum httpMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
};

export interface IRouteLambda {
	httpMethod: httpMethods;
	path: string;
	action: (data: any) => Promise<any>;
	validation: any
}