export interface ICreateGroup {
	groupName: string;
	policies: string[];
}

export interface IUpdateGroup {
	groupId: string;
	groupName: string;
	policies: string[];
}

export interface IDeleteGroup {
	groupId: string;
}

export interface ISearchGroup {
	groupId: string;
	groupName: string;
}