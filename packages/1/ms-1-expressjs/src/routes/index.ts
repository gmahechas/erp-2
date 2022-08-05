import { express } from '@gmahechas/erp-common-expressjs';
import { v1Routes } from './v1';

const router = express.Router();

export const routes = router.use('/rest', [...v1Routes]);