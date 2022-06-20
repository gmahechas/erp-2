import { IGroup } from '@gmahechas/erp-common-js';
import { mongoose, uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	groupId: {
		type: String,
	},
	groupName: {
		type: String,
		required: true
	},
	policies: {
		type: [String],
	},
	companyId: {
		type: String,
		required: true,
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
	this.set('groupId', this.get('_id'));
	next();
});

type GroupDocument = IGroup & mongoose.Document;
let Group: mongoose.Model<GroupDocument>;
Group = mongoose.model<GroupDocument>('Group', schema, 'groups');
export const registerGroupModel = (connection: mongoose.Connection) => Group = connection.model('Group', schema, 'groups');
export { Group }