import path from 'path';

import { grpc, protoLoader, grpcType } from '@gmahechas/erp-common-grpcjs';
import { countryService } from './services/country.service';
import { estateService } from './services/estate.service';

const app = new grpc.Server();
const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, '../node_modules/@gmahechas/erp-common-grpcjs/src/protos/3/index.proto'));
const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as Pick<grpcType.ProtoGrpcType, 'country' | 'estate' | 'city' | 'address'>;
app.addService(proto.country.CountryService.service, countryService);
app.addService(proto.estate.EstateService.service, estateService);

export default app;
