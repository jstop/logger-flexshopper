'use strict';

var util = require('util'),
    winston = require('winston');

module.exports = {
    middleware: function(req, res, next){
        console.info(req.method, req.url, res.statusCode);
        next();
    }
};

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
var logger = new winston.Logger( logging_options );

// Override the built-in console methods with winston hooks
function formatArgs(args){
    return [util.format.apply(util.format, Array.prototype.slice.call(args))];
}

console.log = function(){
    logger.info.apply(logger, formatArgs(arguments));
};
console.info = function(){
    logger.info.apply(logger, formatArgs(arguments));
};
console.warn = function(){
    logger.warn.apply(logger, formatArgs(arguments));
};
console.error = function(){
    logger.error.apply(logger, formatArgs(arguments));
};
console.debug = function(){
    logger.debug.apply(logger, formatArgs(arguments));
};


