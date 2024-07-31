export interface ICreateProfileMenu {
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}

export interface IUpdateProfileMenu {
  profileMenuId: string;
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}

export interface IDeleteProfileMenu {
  profileMenuId: string;
}

export interface ISearchProfileMenu {
  profileMenuId: string;
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}