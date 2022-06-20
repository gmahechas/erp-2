import { IEstate } from '@gmahechas/erp-common-js'
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	estateId: {
		type: String,
	},
	estateName: {
		type: String,
		required: true
	},
	estateCode: {
		type: String,
		required: true
	},
	countryId: {
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
	this.set('estateId', this.get('_id'));
	next();
});

type EstateDocument = IEstate & mongoose.Document;
let Estate: mongoose.Model<EstateDocument>;
Estate = mongoose.model<EstateDocument>('Estate', schema, 'estates');
export const registerEstateModel = (connection: mongoose.Connection) => Estate = connection.model('Estate', schema, 'estates');
export { Estate };
