const AppError = require('../../tools/error.handling/appError');
const winston = require("winston");

// error response env-based handlers
function sendDevErr(err, res) {
    const date_ = new Date().toLocaleString();
    console.error(date_, err); // delete err_ log after finish
    return res
        .status(err.statusCode)
        .json({
            error: {
                date: date_,
                source: err.sourceErr,
                status: err.status,
                error: err,
                message: err.message,
                stack: err.stack
            }
        })
}
function sendProdErr(err, res) {
    console.log(err) // delete err_ log after finish
    if (err.isOperational) {
        return res
            .status(err.statusCode)
            .json({
                error: {
                    status: err.status,
                    message: err.message
                }
            })
    } else {
        winston.loggers.get('operational_logger').log({level: 'error', message: err})
        return res.status(500).json({error: {status: 'error', message: 'something went wrong!!'}})
    }
}


exports.errHandler = (err_, req, res, next) => {
// sources: validation, caught-exception router email

    if (Array.isArray(err_)){
        err_ = err_[0]
    }
    switch (err_.sourceErr) {
        case 'appError':
            break;

        case 'validation':
            err_.isOperational = true;
            err_.statusCode = 400;
            err_.status = 'bad request';
            err_.message = `Bad request ${err_.param}: ${err_.msg}`
            break;

        case 'caught-exception':
            err_.isOperational = false;
            err_.statusCode = 500;
            err_.status = 'unknown error';
            break;
        case 'router':
            if (err_.name === 'JsonWebTokenError' || err_.name === 'TokenExpiredError'){
                err_.isOperational = true;
                err_.statusCode = 401;
                err_.status  = 'unauthorized';
                err_.message = 'Invalid or Expired Credentials, please login again'
            }
            else if(/MongoError/.test(err_.name)){
                // err_.message = `Bad Request: invalid input`
            }
            else {
                err_.isOperational = err_.isOperational || true;
                err_.statusCode = err_.statusCode || 400;
                err_.status = err_.status || 'router error';
            }
            break;

        case 'email':
            err_.isOperational = false;
            err_.statusCode = 500;
            err_.status = 'error on email service';
            break;
    }

    if (process.env.NODE_ENV === 'development') {
        return sendDevErr(err_, res)
    } else if (process.env.NODE_ENV === 'production') {
        return sendProdErr(err_, res);
    }


}
