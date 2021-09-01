export interface ICreateMenu {
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}

export interface IUpdateMenu {
  id: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}

export interface IDeleteMenu {
  id: string;
}

export interface ISearchMenu {
  id: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}