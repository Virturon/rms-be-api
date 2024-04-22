import { Router } from 'express';

import AccountRouter from './accountRouter';
import statusRouter from './statusRouter';

const router = Router();
router.use(statusRouter);
router.use(AccountRouter);

export default router;
