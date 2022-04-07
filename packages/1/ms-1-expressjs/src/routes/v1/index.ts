import { express } from '@gmahechas/erp-common-expressjs';
import { authRouter } from './auth.routes';
import { groupRouter } from './group.routes';
import { userRouter } from './user.routes';

const router = express.Router();

export const v1Routes = [
	router.use('/rest/v1/1/auth', authRouter),
	router.use('/rest/v1/1/group', groupRouter),
	router.use('/rest/v1/1/user', userRouter),
];