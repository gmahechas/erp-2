import { ICompany } from '@gmahechas/erp-common-js';
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    companyId: {
      type: String,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyIdentification: {
      type: String,
      required: true,
    },
    companyKey: {
      type: String,
      required: true,
    },
    cityId: {
      type: String,
      require: true,
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
  this.set('companyId', this.get('_id'));
  next();
});

type CompanyDocument = ICompany & mongoose.Document;
let Company: mongoose.Model<CompanyDocument>;
Company = mongoose.model<CompanyDocument>('Company', schema, 'companies');
export const registerCompanyModel = (connection: mongoose.Connection) =>
  (Company = connection.model('Company', schema, 'companies'));
export { Company };
