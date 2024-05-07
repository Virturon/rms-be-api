import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { initiateConnection } from './db/config';
import { requestLogger } from './middleware/requestLogger';
import { responseLogger } from './middleware/responseLogger';
import router from './router';

const app = express();

initiateConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(requestLogger);
app.use(responseLogger);

app.use(router);
export default app;
