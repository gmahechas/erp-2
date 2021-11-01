import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { ICQ } from '@gmahechas/erp-common-ms-utils-js';
import { IRouteLambda } from '../route.interface';

export interface IHandlerLambda {
	(routes: IRouteLambda[], connectDatabases: (cq: ICQ) => Promise<void>, cq: ICQ):
		(event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>
}