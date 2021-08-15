
import Ajv, { AnySchemaObject } from 'ajv';
const ajv = new Ajv({ allErrors: true });

export const validate = (schema: AnySchemaObject) => ajv.compile(schema);