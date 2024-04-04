import { Router } from 'express';

import statusRouter from './statusRouter';

const router = Router();
router.use(statusRouter);

export default router;
