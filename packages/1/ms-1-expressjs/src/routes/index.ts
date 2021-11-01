import { express } from '@gmahechas/erp-common-expressjs';
import authRouter from './auth.routes';
import userRouter from './user.routes';

const router = express.Router();

const v1Routes = [
	router.use('/rest/v1/1/auth', authRouter),
	router.use('/rest/v1/1/user', userRouter),
];

export default [
	...v1Routes
];