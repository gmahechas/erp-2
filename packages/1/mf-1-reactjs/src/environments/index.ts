import { IConfig } from '@gmahechas/erp-common-mf-utils-js';

export let env: IConfig;

export const initEnv = () => {
	(async () => {
		const { config } = await import(`./${ENVIRONMENT}.ts`);
		env = config;
	})();
}