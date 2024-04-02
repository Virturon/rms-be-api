import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import router from './router';

const app = express();

app.use(helmet());
app.use(cors());
app.use(router);

export default app;
