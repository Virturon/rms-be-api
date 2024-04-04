import { Router } from 'express';

import { getStatus } from '../controller/statusController';

const statusRouter = Router();

statusRouter.get('/status', getStatus);

export default statusRouter;
