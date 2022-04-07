import { actionType, serviceType } from './policy.interface';

export interface ICreatePolicy {
	policyName: string;
	services: Array<serviceType>;
	actions: Array<actionType>;
}

export interface IUpdatePolicy {
	id: string;
	policyName: string;
	services: Array<serviceType>;
	actions: Array<actionType>;
}

export interface IDeletePolicy {
	id: string;
}

export interface ISearchPolicy {
	id: string;
	policyName: string;
	services: Array<serviceType>;
	actions: Array<actionType>;
}