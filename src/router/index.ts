import { Router } from 'express';

import accountRouter from './accountRouter';
import profileRouter from './profileRouter';
import statusRouter from './statusRouter';

const router = Router();
router.use(statusRouter);
router.use(accountRouter);
router.use(profileRouter);

export default router;
