import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { IRouteLambda } from './route.interface';

export interface IHandlerLambda {
	(routes: IRouteLambda[], connectDatabases: () => Promise<void>):
		(event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>
}