// Original file: src/protos/6/menu.proto

export interface Menu {
  id?: string;
  menuName?: string;
  menuDescription?: string;
  menuUri?: string;
  menuOrder?: string;
  menuIdParent?: string;
}

export interface Menu__Output {
  id: string;
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: string;
  menuIdParent: string;
}
