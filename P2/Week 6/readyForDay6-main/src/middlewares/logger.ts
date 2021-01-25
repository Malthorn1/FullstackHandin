const winston = require('winston');
const expressWinston = require('express-winston');
import path from "path"

const requestLoggerTransports: Array<any> = [
  new winston.transports.File({ filename: path.join(process.cwd(), "logs", "request.log") })
]
const errorLoggerTransports: Array<any> = [
  new winston.transports.File({ filename: path.join(process.cwd(), "logs", "error.log") })
]
if (process.env.NODE_ENV !== 'production') {
  requestLoggerTransports.push(new winston.transports.Console());
  errorLoggerTransports.push(new winston.transports.Console());
}

const requestLogger = expressWinston.logger({
  transports: requestLoggerTransports,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(), 
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  expressFormat: true,
  colorize: false
})

const errorLogger = expressWinston.errorLogger({
  transports: errorLoggerTransports,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(), 
    winston.format.json(),
    winston.format.prettyPrint()
  )
})

export { requestLogger, errorLogger };
