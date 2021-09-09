import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { IConnectDatabases, IMongodbConnectArgs } from '@gmahechas/erp-common-ms-utils-js';
import { IRouteLambda } from '../route.interface';

export interface IHandlerLambda {
	(routes: IRouteLambda[], connectDatabases: IConnectDatabases, mongodbConnectArgs: IMongodbConnectArgs[]): (event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>
}