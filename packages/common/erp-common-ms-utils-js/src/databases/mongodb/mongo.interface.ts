import mongoose from 'mongoose';

type mongodbConnectionMode = 'connect' | 'createConnection';
interface IMongodbConnectArgs {
  uri: string;
  connectOptions?: mongoose.ConnectOptions;
}

export interface IMongodbConnect {
  (uri: string, connectOptions?: mongoose.ConnectOptions): Promise<mongoose.Connection>;
}

export interface IConnectToMongo {
  (
    mongodbConnectArgs: IMongodbConnectArgs,
    mode: mongodbConnectionMode,
    registerModelFuncs?: Array<(connection: mongoose.Connection) => void>,
  ): Promise<mongoose.Connection | undefined>;
}
