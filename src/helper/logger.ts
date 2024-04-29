import dotenv from 'dotenv';
import * as fluentTransport from 'fluent-logger';
import { createLogger, format, transports } from 'winston';

const fluentdconfig = {
  host: process.env.FLUENTD_HOST,
  port: process.env.FLUENTD_PORT,
  timeout: 3.0,
  requireAckResponse: true,
};
dotenv.config();

const fluentdTransport = fluentTransport.support.winstonTransport();
const fluentdLog = new fluentdTransport(fluentdconfig);

const logger = createLogger({
  format: format.combine(
    format.json(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
  ),
  transports: [
    fluentdLog,
    new transports.File({ filename: 'log/error.txt', level: 'error' }),
    new transports.File({ filename: 'log/access.txt', level: 'info' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}

export default logger;
