import { ICountry } from '@gmahechas/erp-common'
import { Schema, Document, uuidv4, Model, Connection } from '@gmahechas/erp-common-ms-utils-js';

const countrySchema = new Schema({
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
let Country: Model<CountryDocument>;
export const registerCountryModel = (connection: Connection) => Country = connection.model('Country', countrySchema, 'countries');
export { Country }
