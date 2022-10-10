import { IOffice } from '@gmahechas/erp-common-js';
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    officeId: {
      type: String,
    },
    officeName: {
      type: String,
      required: true,
    },
    companyId: {
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
  this.set('officeId', this.get('_id'));
  next();
});

type OfficeDocument = IOffice & mongoose.Document;
let Office: mongoose.Model<OfficeDocument>;
Office = mongoose.model<OfficeDocument>('Office', schema, 'offices');
export const registerOfficeyModel = (connection: mongoose.Connection) =>
  (Office = connection.model('Office', schema, 'offices'));
export { Office };
