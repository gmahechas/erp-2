export interface ICreateMenu {
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}

export interface IUpdateMenu {
  menuId: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}

export interface IDeleteMenu {
  menuId: string;
}

export interface ISearchMenu {
  menuId: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}