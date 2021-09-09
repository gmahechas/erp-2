import { IEstate } from '@gmahechas/erp-common'
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
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
	versionKey: false,
	toJSON: {
		transform(doc, ret) {
			ret.id = ret._id;
			delete ret._id;
		}
	}
});

type EstateDocument = IEstate & Document;
let Estate: mongoose.Model<EstateDocument>;
Estate = mongoose.model<EstateDocument>('Estate', schema, 'estates');
export const registerEstateModel = (connection: mongoose.Connection | mongoose.Mongoose) => Estate = connection.model('Estate', schema, 'estates');
export { Estate };
