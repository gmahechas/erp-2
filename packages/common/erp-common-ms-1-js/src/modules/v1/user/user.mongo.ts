import { IUser } from '@gmahechas/erp-common';
import { mongoose, uuidv4, toHash } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	id: {
		type: String,
	},
	userName: {
		type: String,
		required: true
	},
	userPassword: {
		type: String,
		required: true
	},
	companyId: {
		type: String,
		required: true,
	},
	companyKey: {
		type: String,
		required: true,
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
	if (this.isModified('userPassword')) {
		const hashed = await toHash(this.get('userPassword'), 10);
		this.set('userPassword', hashed);
	}
	next();
});

type UserDocument = IUser & mongoose.Document;
let User: mongoose.Model<UserDocument>;
User = mongoose.model<UserDocument>('User', schema, 'users');
export const registerUserModel = (connection: mongoose.Connection) => User = connection.model('User', schema, 'users');
export { User }