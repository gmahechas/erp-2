import { ICity } from '@gmahechas/erp-common-js'
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	id: {
		type: String,
	},
	cityName: {
		type: String,
		required: true
	},
	cityCode: {
		type: String,
		required: true
	},
	estateId: {
		type: String,
		required: true
	}
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

type CityDocument = ICity & mongoose.Document;
let City: mongoose.Model<CityDocument>;
City = mongoose.model<CityDocument>('City', schema, 'cities');
export const registerCityModel = (connection: mongoose.Connection) => City = connection.model('City', schema, 'cities');
export { City };