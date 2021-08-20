import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CompanyServiceClient as _company_CompanyServiceClient, CompanyServiceDefinition as _company_CompanyServiceDefinition } from './company/CompanyService';
import type { OfficeServiceClient as _office_OfficeServiceClient, OfficeServiceDefinition as _office_OfficeServiceDefinition } from './office/OfficeService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  company: {
    Company: MessageTypeDefinition
    CompanyService: SubtypeConstructor<typeof grpc.Client, _company_CompanyServiceClient> & { service: _company_CompanyServiceDefinition }
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
  }
  office: {
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
    Office: MessageTypeDefinition
    OfficeService: SubtypeConstructor<typeof grpc.Client, _office_OfficeServiceClient> & { service: _office_OfficeServiceDefinition }
  }
}

