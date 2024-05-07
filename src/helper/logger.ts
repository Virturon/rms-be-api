import dotenv from 'dotenv';
import * as fluentTransport from 'fluent-logger';
import { createLogger, format, transports } from 'winston';

dotenv.config();

const fluentdconfig = {
  host: process.env.FLUENTD_HOST,
  port: process.env.FLUENTD_PORT,
  timeout: 3.0,
  requireAckResponse: true,
};

const fluentdTransport = fluentTransport.support.winstonTransport();
const fluentdLog = new fluentdTransport(fluentdconfig);

const loggerTransports = [
  new transports.Console(),
  new transports.File({ filename: 'logs/error.log', level: 'error' }),
  new transports.File({ filename: 'logs/access.log', level: 'info' }),
];
const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: loggerTransports,
});

if (process.env.NODE_ENV === 'production') {
  loggerTransports.push(fluentdLog);
}

export default logger;
