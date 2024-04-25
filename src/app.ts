import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { initiateConnection } from './db/config';
import router from './router';

const app = express();

initiateConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(router);

export default app;
