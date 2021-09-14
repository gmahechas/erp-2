import ajv, { AnySchemaObject } from 'ajv';
import addFormats from 'ajv-formats';

const ajvObj = new ajv({ allErrors: true });
addFormats(ajvObj);

export { ajv };
export const validate = (schema: AnySchemaObject) => ajvObj.compile(schema);