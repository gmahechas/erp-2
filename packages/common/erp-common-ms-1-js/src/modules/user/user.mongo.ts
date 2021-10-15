import { IUser } from '@gmahechas/erp-common';
import { mongoose, uuidv4, toHash } from '@gmahechas/erp-common-ms-utils-js';

const schema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	userName: {
		type: String,
		required: true
	},
	userPassword: {
		type: String,
		required: true
	},
	personId: {
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

schema.pre('save', async function (next) {
	if (this.isModified('userPassword')) {
		const hashed = await toHash(this.get('userPassword'), 10);
		this.set('userPassword', hashed);
	}
	next();
});

type UserDocument = IUser & Document;
let User: mongoose.Model<UserDocument>;
User = mongoose.model<UserDocument>('User', schema, 'users');
export const registerUserModel = (connection: mongoose.Connection) => User = connection.model('User', schema, 'users');
export { User }