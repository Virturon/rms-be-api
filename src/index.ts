import app from './app';
import logger from './helper/logger';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server listening at port ${port}`);
});
