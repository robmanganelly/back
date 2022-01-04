const winston = require('winston');
require('winston-mongodb');

const { format } = winston;
const { combine, label, json } = format;



function loggerFactory(level='info', labelOrTransportName='exceptions',options){
    const defaultOpt = {
        useConsoleTransport: true,
        useFileTransport: true,
        useHttpTransport: false,
        useMongoDBTransport: false
    }
    const _options = Object.assign(options || defaultOpt)

    let _transports = [
        new winston.transports.Console({
            level:'info',
            format: winston.format.simple(),
        }),

        new winston.transports.File({
            filename: `logs/${labelOrTransportName}.log`,
            level:'error',
            handleExceptions: true,
            handleRejections: true
        }),
    ];

    if (_options.useConsoleTransport === false){
        _transports = _transports.slice(1)
    }
    if (_options.useFileTransport === false){
        _transports = _transports.slice(0,1)
    }

    if (_options.useMongoDBTransport){
        // ??
        // {
        //     handleExceptions: false,
        //         handleRejections: false,
        //     level: 'error',
        //     collection: 'ErrorLogs'
        // }
        const mongoTransport = new winston.transports.MongoDB({
            level: 'error',
            options: { useUnifiedTopology: true },
            db:  process.env.CLUSTER || process.env.LOCAL_DB,
            collection: 'logs'
        });
        _transports.push(mongoTransport);
    }
    if (_options.useHttpTransport){
        const httpTransport = new winston.transports.Http({
            level:  'error',
            format: json(),
            host: process.env.DEPLOY_SERVER || 'localhost',
            port: +process.env.PORT,
            path: ''
        })
        // must finish config
        // _transports.push(httpTransport);
    }

    return {
        level: level,
        format: combine(
            label({label: labelOrTransportName}),
            json()
        ),
        defaultMeta: {service: 'user-service'},
        transports: _transports
    }
}


const logger = winston.createLogger(loggerFactory());

winston.loggers.add(
    'socket-io_logger',
    loggerFactory('info','socket-io',{
        useHttpTransport: true, useMongoDBTransport: true
    }));


winston.loggers.add(
    'operational_logger',
    loggerFactory('error','exceptions',{
        useConsoleTransport: false
    })
)

winston.loggers.add(
    'dev_log',
    loggerFactory('info','dev_log', {
        useFileTransport: false
    })
)


module.exports.dev_log = function(level, message, force= false){
    if (process.env.NODE_ENV !== 'production' || force){
        winston.loggers.get('dev_log').log(level,message)
    }
}
