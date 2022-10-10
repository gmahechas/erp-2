import { express } from '@gmahechas/erp-common-expressjs';
import { companyRouter } from './company.routes';
import { officeRouter } from './office.routes';

const router = express.Router();

export const v1Routes = [
  router.use('/v1/4/company', companyRouter),
  router.use('/v1/4/office', officeRouter),
];
