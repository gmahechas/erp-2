import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { IConnectToMongo, IMongodbConnectArgs, mongoose } from '@gmahechas/erp-common-ms-utils-js';
import { IRouteLambda } from '../route.interface';

export interface IHandlerLambda {
	(
		routes: IRouteLambda[],
		connectToMongo: IConnectToMongo,
		mongodbConnectArgs: { mongodbConnectArg: IMongodbConnectArgs, registerModelFunc: Array<(connection: mongoose.Connection | mongoose.Mongoose) => void> }[]
	): (event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>
}