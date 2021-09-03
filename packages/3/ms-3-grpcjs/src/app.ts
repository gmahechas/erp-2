import path from 'path';
import { Server, loadPackageDefinition } from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv';

import { grpcType3 } from '@gmahechas/erp-common-grpcjs';
import { countryService } from './services/country.service';
import { estateService } from './services/estate.service';

dotenv.config();

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, '../node_modules/@gmahechas/erp-common-grpcjs/src/protos/3/index.proto'));
const proto = (loadPackageDefinition(packageDefinition) as unknown) as grpcType3.ProtoGrpcType;

const app = new Server();
app.addService(proto.country.CountryService.service, countryService);
app.addService(proto.estate.EstateService.service, estateService);
export default app;
