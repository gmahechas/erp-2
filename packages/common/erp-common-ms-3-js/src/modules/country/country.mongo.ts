import { ICountry } from '@gmahechas/erp-common'
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	countryName: {
		type: String,
		required: true
	},
	countryCode: {
		type: String,
		required: true
	},
}, {
	versionKey: false,
	toObject: {
		transform(doc, ret) {
			ret.id = ret._id;
			delete ret._id;
		}
	},
	toJSON: {
		transform(doc, ret) {
			ret.id = ret._id;
			delete ret._id;
		}
	}
});

type CountryDocument = ICountry & Document;
let Country: mongoose.Model<CountryDocument>;
Country = mongoose.model<CountryDocument>('Country', schema, 'countries');
export const registerCountryModel = (connection: mongoose.Connection) => Country = connection.model('Country', schema, 'countries');
export { Country }
