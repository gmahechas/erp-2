import { APIGatewayProxyEvent } from 'aws-lambda';

export enum httpMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
};

export type argsType = Array<'body' | 'pathParameters' | 'queryStringParameters'>;


type ILambdaMiddlewareOne = (event: APIGatewayProxyEvent) => Promise<void>;
type ILambdaMiddlewareTwo = Promise<(event: APIGatewayProxyEvent) => void>;
export type TLambdaMiddleware = ILambdaMiddlewareOne | ILambdaMiddlewareTwo;

export interface IRouteLambda {
	httpMethod: httpMethods;
	path: string;
	middlewares: Array<TLambdaMiddleware>;
	args: argsType;
	action: (data: any) => Promise<any>;
	statusCode: number;
}