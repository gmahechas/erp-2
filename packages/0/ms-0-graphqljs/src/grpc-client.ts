import path from 'path';
import { grpc, protoLoader, grpcType3 } from '@gmahechas/erp-common-grpcjs';

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, '../node_modules/@gmahechas/erp-common-grpcjs/src/protos/3/index.proto'));
const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as grpcType3.ProtoGrpcType;

export const countryClient = new proto.country.CountryService(`0.0.0.0:50003`, grpc.credentials.createInsecure());