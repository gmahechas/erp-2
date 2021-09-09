import { ICountry } from '@gmahechas/erp-common'
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const countrySchema = new mongoose.Schema({
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
	toJSON: {
		transform(doc, ret) {
			ret.id = ret._id;
			delete ret._id;
		}
	}
});

type CountryDocument = ICountry & Document;
let Country: mongoose.Model<CountryDocument>;
Country = mongoose.model<CountryDocument>('Country', countrySchema, 'countries');
export const registerCountryModel = (connection: mongoose.Connection | mongoose.Mongoose) => Country = connection.model('Country', countrySchema, 'countries');
export { Country }
