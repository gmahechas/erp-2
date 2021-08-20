import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AddressServiceClient as _address_AddressServiceClient, AddressServiceDefinition as _address_AddressServiceDefinition } from './address/AddressService';
import type { CityServiceClient as _city_CityServiceClient, CityServiceDefinition as _city_CityServiceDefinition } from './city/CityService';
import type { CountryServiceClient as _country_CountryServiceClient, CountryServiceDefinition as _country_CountryServiceDefinition } from './country/CountryService';
import type { EstateServiceClient as _estate_EstateServiceClient, EstateServiceDefinition as _estate_EstateServiceDefinition } from './estate/EstateService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  address: {
    Address: MessageTypeDefinition
    AddressService: SubtypeConstructor<typeof grpc.Client, _address_AddressServiceClient> & { service: _address_AddressServiceDefinition }
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
  }
  city: {
    City: MessageTypeDefinition
    CityService: SubtypeConstructor<typeof grpc.Client, _city_CityServiceClient> & { service: _city_CityServiceDefinition }
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
  }
  country: {
    Country: MessageTypeDefinition
    CountryService: SubtypeConstructor<typeof grpc.Client, _country_CountryServiceClient> & { service: _country_CountryServiceDefinition }
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
  }
  estate: {
    Estate: MessageTypeDefinition
    EstateService: SubtypeConstructor<typeof grpc.Client, _estate_EstateServiceClient> & { service: _estate_EstateServiceDefinition }
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
  }
}

