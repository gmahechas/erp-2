import Ajv, { AnySchemaObject } from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

export const validate = (schema: AnySchemaObject) => ajv.compile(schema);