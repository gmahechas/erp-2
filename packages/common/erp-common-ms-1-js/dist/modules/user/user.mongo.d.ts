import { IUser } from '@gmahechas/erp-common';
import { mongoose } from '@gmahechas/erp-common-ms-utils-js';
declare type UserDocument = IUser & Document;
declare let User: mongoose.Model<UserDocument>;
export declare const registerUserModel: (connection: mongoose.Connection) => mongoose.Model<UserDocument, {}, {}, {}>;
export { User };
