import { validate } from '@gmahechas/erp-common';

export const validatorLambda: any = (schema: object) => validate(schema);