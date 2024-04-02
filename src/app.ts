import express, { Request, Response } from 'express';
import router from './router';
const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hiii!');
});
app.use(router);

export default app;
