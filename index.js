var winston = require('winston')

if (process.env.DEIS_LOGGING_ENABLED) {
  logging_options = {
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
        json: true,
        stringify: true
      })
    ],
    exitOnError: false
  }
} else {
  logging_options = {
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
        json: true,
      })
    ],
    exitOnError: false
  }
}
