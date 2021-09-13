import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PersonServiceClient as _person_PersonServiceClient, PersonServiceDefinition as _person_PersonServiceDefinition } from './person/PersonService';
import type { TypeIdentificationServiceClient as _type_identification_TypeIdentificationServiceClient, TypeIdentificationServiceDefinition as _type_identification_TypeIdentificationServiceDefinition } from './type_identification/TypeIdentificationService';
import type { TypePersonServiceClient as _type_person_TypePersonServiceClient, TypePersonServiceDefinition as _type_person_TypePersonServiceDefinition } from './type_person/TypePersonService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  person: {
    Create: MessageTypeDefinition
    Delete: MessageTypeDefinition
    Many: MessageTypeDefinition
    One: MessageTypeDefinition
    Person: MessageTypeDefinition
    PersonService: SubtypeConstructor<typeof grpc.Client, _person_PersonServiceClient> & { service: _person_PersonServiceDefinition }
    Search: MessageTypeDefinition
    Update: MessageTypeDefinition
  }
  type_identification: {
    Create: MessageTypeDefinition
    Delete: MessageTypeDefinition
    Many: MessageTypeDefinition
    One: MessageTypeDefinition
    Search: MessageTypeDefinition
    TypeIdentification: MessageTypeDefinition
    TypeIdentificationService: SubtypeConstructor<typeof grpc.Client, _type_identification_TypeIdentificationServiceClient> & { service: _type_identification_TypeIdentificationServiceDefinition }
    Update: MessageTypeDefinition
  }
  type_person: {
    Create: MessageTypeDefinition
    Delete: MessageTypeDefinition
    Many: MessageTypeDefinition
    One: MessageTypeDefinition
    Search: MessageTypeDefinition
    TypePerson: MessageTypeDefinition
    TypePersonService: SubtypeConstructor<typeof grpc.Client, _type_person_TypePersonServiceClient> & { service: _type_person_TypePersonServiceDefinition }
    Update: MessageTypeDefinition
  }
}

