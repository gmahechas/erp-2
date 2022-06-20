export interface ICreatePolicy {
	policyName: string;
	service: string;
	actions: string[];
}

export interface IUpdatePolicy {
	policyId: string;
	policyName: string;
	service: string;
	actions: string[];
}

export interface IDeletePolicy {
	policyId: string;
}

export interface ISearchPolicy {
	policyId: string;
	policyName: string;
	service: string;
	actions: string[];
}