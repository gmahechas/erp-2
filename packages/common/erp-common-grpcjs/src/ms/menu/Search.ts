// Original file: src/protos/6/menu.proto

export interface Search {
  id?: string;
  menuName?: string;
  menuDescription?: string;
  menuUri?: string;
  menuOrder?: string;
  menuIdParent?: string;
}

export interface Search__Output {
  id: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: string;
  menuIdParent: string;
}
