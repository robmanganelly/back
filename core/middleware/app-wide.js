const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const xssClean = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const path = require('path');
const cors = require('cors');
const {bodySanitizer} = require("./req-sanitizer");
const { wildcardHandler } = require('../../tools/routing/wildcard')
const { errHandler } = require('./error-global');


module.exports = function(application){

    // shared ?
    // application.use(cors({
    //     origin: '*',
    //     methods: ['GET','POST','PATCH','PUT','DELETE','OPTIONS'],
    //     allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Content-Security-Policy']
    // }));
    // for integrated use
    application.use(cors());

    // application.use(helmet());
    application.use(helmet.contentSecurityPolicy({
            useDefaults: true,
            directives:{
                // "script-src-attr": ["'self'" ], // bad
                "script-src-attr": ["'self'", "'unsafe-inline'", "'unsafe-hashes'"], // bad
                "connect-src": [
                    "'self'",
                    `wss://${process.env.PROD_SERVER}`,
                    `ws://${process.env.NODE_ENV === 'production'? process.env.PROD_SERVER : process.env.DEV_SERVER}`
                ]
            }
        })
    );

    application.use(xssClean());
    application.use(mongoSanitize());
    if (process.env.NODE_ENV === 'development'){
        application.use(morgan('dev'));
    }
    application.use('/api',require('./req-limit'));
    application.use(express.json());

    application.use(hpp({}));

    application.use(express.static(path.join(__dirname,'..','..','html')))
    application.use(express.static(path.join(__dirname,'..','..','tools','static','img')))

    application.use(bodySanitizer)
    require('./routes')(application);
    application.use(errHandler)
}
