import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MenuServiceClient as _menu_MenuServiceClient, MenuServiceDefinition as _menu_MenuServiceDefinition } from './menu/MenuService';
import type { ProfileServiceClient as _profile_ProfileServiceClient, ProfileServiceDefinition as _profile_ProfileServiceDefinition } from './profile/ProfileService';
import type { ProfileMenuServiceClient as _profile_menu_ProfileMenuServiceClient, ProfileMenuServiceDefinition as _profile_menu_ProfileMenuServiceDefinition } from './profile_menu/ProfileMenuService';
import type { UserProfileServiceClient as _user_profile_UserProfileServiceClient, UserProfileServiceDefinition as _user_profile_UserProfileServiceDefinition } from './user_profile/UserProfileService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  menu: {
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
    Menu: MessageTypeDefinition
    MenuService: SubtypeConstructor<typeof grpc.Client, _menu_MenuServiceClient> & { service: _menu_MenuServiceDefinition }
  }
  profile: {
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
    Profile: MessageTypeDefinition
    ProfileService: SubtypeConstructor<typeof grpc.Client, _profile_ProfileServiceClient> & { service: _profile_ProfileServiceDefinition }
  }
  profile_menu: {
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
    ProfileMenu: MessageTypeDefinition
    ProfileMenuService: SubtypeConstructor<typeof grpc.Client, _profile_menu_ProfileMenuServiceClient> & { service: _profile_menu_ProfileMenuServiceDefinition }
  }
  user_profile: {
    IEntityMany: MessageTypeDefinition
    IEntityOne: MessageTypeDefinition
    UserProfile: MessageTypeDefinition
    UserProfileService: SubtypeConstructor<typeof grpc.Client, _user_profile_UserProfileServiceClient> & { service: _user_profile_UserProfileServiceDefinition }
  }
}

