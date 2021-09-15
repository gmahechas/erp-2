import path from 'path';
import util from 'util';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../ms';

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, '../../src/protos/index.proto'));
const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

const countryGrpcClient = new proto.country.CountryService(`0.0.0.0:50003`, grpc.credentials.createInsecure());
const countryClientAsync = ({
	createOne: util.promisify(countryGrpcClient.createOne).bind(countryGrpcClient),
	updateOne: util.promisify(countryGrpcClient.updateOne).bind(countryGrpcClient),
	deleteOne: util.promisify(countryGrpcClient.deleteOne).bind(countryGrpcClient),
	searchOne: util.promisify(countryGrpcClient.searchOne).bind(countryGrpcClient),
	searchMany: util.promisify(countryGrpcClient.searchMany).bind(countryGrpcClient)
});

export const grpcClients3 = ({	
	countryClientAsync
});