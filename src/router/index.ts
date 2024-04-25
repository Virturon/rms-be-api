import { Router } from 'express';

import accountRouter from './accountRouter';
import statusRouter from './statusRouter';

const router = Router();
router.use(statusRouter);
router.use(accountRouter);

export default router;
