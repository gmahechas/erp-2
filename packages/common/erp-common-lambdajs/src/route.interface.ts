export enum httpMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
};

export interface IRouteLambda {
	httpMethod: httpMethods;
	path: string;
	args: Array<'body' | 'pathParameters' | 'queryStringParameters'>;
	validation: any;
	action: (data: any) => Promise<any>;
}