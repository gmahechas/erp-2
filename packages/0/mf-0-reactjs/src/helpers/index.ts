import { LocalStorage } from '@gmahechas/erp-common-mf-utils-js';
import { initGraphqlClients } from './graphql';

export const initHelpers = async () => {
	LocalStorage.init();
	await initGraphqlClients();
}