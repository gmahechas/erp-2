export enum httpMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
};

export type argsType = Array<'body' | 'pathParameters' | 'queryStringParameters'>;

export interface IRouteLambda {
	httpMethod: httpMethods;
	path: string;
	args: argsType;
	validation: any;
	action: (data: any) => Promise<any>;
}