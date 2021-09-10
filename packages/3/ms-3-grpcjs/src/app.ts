import path from 'path';
import { Server, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';

import { dotenv } from '@gmahechas/erp-common-ms-utils-js';
import { grpcType3 } from '@gmahechas/erp-common-grpcjs';
import { countryService } from './services/country.service';
import { estateService } from './services/estate.service';

dotenv.config();

const app = new Server();
const packageDefinition = loadSync(path.resolve(__dirname, '../node_modules/@gmahechas/erp-common-grpcjs/src/protos/3/index.proto'));
const proto = (loadPackageDefinition(packageDefinition) as unknown) as grpcType3.ProtoGrpcType;
app.addService(proto.country.CountryService.service, countryService);
app.addService(proto.estate.EstateService.service, estateService);

export default app;
