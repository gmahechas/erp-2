import { ICountry } from '@gmahechas/erp-common-js'
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	id: {
		type: String,
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
	toObject: {
		transform(doc, ret) {
			delete ret._id;
		}
	},
	toJSON: {
		transform(doc, ret) {
			delete ret._id;
		}
	}
});

schema.pre('save', async function (next) {
	this.set('id', this.get('_id'));
	next();
});

type CountryDocument = ICountry & mongoose.Document;
let Country: mongoose.Model<CountryDocument>;
Country = mongoose.model<CountryDocument>('Country', schema, 'countries');
export const registerCountryModel = (connection: mongoose.Connection) => Country = connection.model('Country', schema, 'countries');
export { Country }
