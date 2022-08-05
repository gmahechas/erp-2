import { express } from '@gmahechas/erp-common-expressjs';
import { authRouter } from './auth.routes';
import { groupRouter } from './group.routes';
import { policyRouter } from './policy.routes';
import { userRouter } from './user.routes';

const router = express.Router();

export const v1Routes = [
	router.use('/v1/1/auth', authRouter),
	router.use('/v1/1/group', groupRouter),
	router.use('/v1/1/policy', policyRouter),
	router.use('/v1/1/user', userRouter),
];