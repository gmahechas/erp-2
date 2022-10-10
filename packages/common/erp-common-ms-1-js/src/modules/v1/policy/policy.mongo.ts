import { IPolicy } from '@gmahechas/erp-common-js';
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    policyId: {
      type: String,
    },
    policyName: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    actions: {
      type: [String],
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
  },
  {
    toObject: {
      transform(doc, ret) {
        delete ret._id;
      },
    },
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
      },
    },
  },
);

schema.pre('save', async function (next) {
  this.set('policyId', this.get('_id'));
  next();
});

type PolicyDocument = IPolicy & mongoose.Document;
let Policy: mongoose.Model<PolicyDocument>;
Policy = mongoose.model<PolicyDocument>('Policy', schema, 'policies');
export const registerPolicyModel = (connection: mongoose.Connection) =>
  (Policy = connection.model('Policy', schema, 'policies'));
export { Policy };
