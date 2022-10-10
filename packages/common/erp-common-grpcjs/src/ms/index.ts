import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type {
  AddressServiceClient as _address_AddressServiceClient,
  AddressServiceDefinition as _address_AddressServiceDefinition,
} from './address/AddressService';
import type {
  AuthServiceClient as _auth_AuthServiceClient,
  AuthServiceDefinition as _auth_AuthServiceDefinition,
} from './auth/AuthService';
import type {
  CityServiceClient as _city_CityServiceClient,
  CityServiceDefinition as _city_CityServiceDefinition,
} from './city/CityService';
import type {
  CompanyServiceClient as _company_CompanyServiceClient,
  CompanyServiceDefinition as _company_CompanyServiceDefinition,
} from './company/CompanyService';
import type {
  CountryServiceClient as _country_CountryServiceClient,
  CountryServiceDefinition as _country_CountryServiceDefinition,
} from './country/CountryService';
import type {
  EstateServiceClient as _estate_EstateServiceClient,
  EstateServiceDefinition as _estate_EstateServiceDefinition,
} from './estate/EstateService';
import type {
  MenuServiceClient as _menu_MenuServiceClient,
  MenuServiceDefinition as _menu_MenuServiceDefinition,
} from './menu/MenuService';
import type {
  OfficeServiceClient as _office_OfficeServiceClient,
  OfficeServiceDefinition as _office_OfficeServiceDefinition,
} from './office/OfficeService';
import type {
  PersonServiceClient as _person_PersonServiceClient,
  PersonServiceDefinition as _person_PersonServiceDefinition,
} from './person/PersonService';
import type {
  ProfileServiceClient as _profile_ProfileServiceClient,
  ProfileServiceDefinition as _profile_ProfileServiceDefinition,
} from './profile/ProfileService';
import type {
  ProfileMenuServiceClient as _profile_menu_ProfileMenuServiceClient,
  ProfileMenuServiceDefinition as _profile_menu_ProfileMenuServiceDefinition,
} from './profile_menu/ProfileMenuService';
import type {
  TypeIdentificationServiceClient as _type_identification_TypeIdentificationServiceClient,
  TypeIdentificationServiceDefinition as _type_identification_TypeIdentificationServiceDefinition,
} from './type_identification/TypeIdentificationService';
import type {
  TypePersonServiceClient as _type_person_TypePersonServiceClient,
  TypePersonServiceDefinition as _type_person_TypePersonServiceDefinition,
} from './type_person/TypePersonService';
import type {
  UserServiceClient as _user_UserServiceClient,
  UserServiceDefinition as _user_UserServiceDefinition,
} from './user/UserService';
import type {
  UserProfileServiceClient as _user_profile_UserProfileServiceClient,
  UserProfileServiceDefinition as _user_profile_UserProfileServiceDefinition,
} from './user_profile/UserProfileService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  address: {
    Address: MessageTypeDefinition;
    AddressService: SubtypeConstructor<typeof grpc.Client, _address_AddressServiceClient> & {
      service: _address_AddressServiceDefinition;
    };
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  auth: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _auth_AuthServiceClient> & { service: _auth_AuthServiceDefinition };
    SingInRequest: MessageTypeDefinition;
    SingInResponse: MessageTypeDefinition;
  };
  city: {
    City: MessageTypeDefinition;
    CityService: SubtypeConstructor<typeof grpc.Client, _city_CityServiceClient> & { service: _city_CityServiceDefinition };
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  company: {
    Company: MessageTypeDefinition;
    CompanyService: SubtypeConstructor<typeof grpc.Client, _company_CompanyServiceClient> & {
      service: _company_CompanyServiceDefinition;
    };
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  country: {
    Country: MessageTypeDefinition;
    CountryService: SubtypeConstructor<typeof grpc.Client, _country_CountryServiceClient> & {
      service: _country_CountryServiceDefinition;
    };
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  estate: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Estate: MessageTypeDefinition;
    EstateService: SubtypeConstructor<typeof grpc.Client, _estate_EstateServiceClient> & {
      service: _estate_EstateServiceDefinition;
    };
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  menu: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    Menu: MessageTypeDefinition;
    MenuService: SubtypeConstructor<typeof grpc.Client, _menu_MenuServiceClient> & { service: _menu_MenuServiceDefinition };
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  office: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    Office: MessageTypeDefinition;
    OfficeService: SubtypeConstructor<typeof grpc.Client, _office_OfficeServiceClient> & {
      service: _office_OfficeServiceDefinition;
    };
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  person: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Person: MessageTypeDefinition;
    PersonService: SubtypeConstructor<typeof grpc.Client, _person_PersonServiceClient> & {
      service: _person_PersonServiceDefinition;
    };
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  profile: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Profile: MessageTypeDefinition;
    ProfileService: SubtypeConstructor<typeof grpc.Client, _profile_ProfileServiceClient> & {
      service: _profile_ProfileServiceDefinition;
    };
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  profile_menu: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    ProfileMenu: MessageTypeDefinition;
    ProfileMenuService: SubtypeConstructor<typeof grpc.Client, _profile_menu_ProfileMenuServiceClient> & {
      service: _profile_menu_ProfileMenuServiceDefinition;
    };
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
  };
  type_identification: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    TypeIdentification: MessageTypeDefinition;
    TypeIdentificationService: SubtypeConstructor<
      typeof grpc.Client,
      _type_identification_TypeIdentificationServiceClient
    > & { service: _type_identification_TypeIdentificationServiceDefinition };
    Update: MessageTypeDefinition;
  };
  type_person: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    TypePerson: MessageTypeDefinition;
    TypePersonService: SubtypeConstructor<typeof grpc.Client, _type_person_TypePersonServiceClient> & {
      service: _type_person_TypePersonServiceDefinition;
    };
    Update: MessageTypeDefinition;
  };
  user: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
    User: MessageTypeDefinition;
    UserService: SubtypeConstructor<typeof grpc.Client, _user_UserServiceClient> & { service: _user_UserServiceDefinition };
  };
  user_profile: {
    Create: MessageTypeDefinition;
    Delete: MessageTypeDefinition;
    Many: MessageTypeDefinition;
    One: MessageTypeDefinition;
    Search: MessageTypeDefinition;
    Update: MessageTypeDefinition;
    UserProfile: MessageTypeDefinition;
    UserProfileService: SubtypeConstructor<typeof grpc.Client, _user_profile_UserProfileServiceClient> & {
      service: _user_profile_UserProfileServiceDefinition;
    };
  };
}
