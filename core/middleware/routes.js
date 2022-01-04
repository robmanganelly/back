const path = require('path');

const users = require('../../endpoints/users/route');
const auth = require('../../endpoints/auth/route');
const rooms = require('../../endpoints/rooms/route');
const messages = require('../../endpoints/messages/route');
const html = require('../middleware/static-router');
const {wildcardHandler} = require("../../tools/routing/wildcard");
const {dev_log} = require("../../tools/error.handling/unc-except-logger");



module.exports = function(application){
    application.use('/api/v1/users',users);
    application.use('/api/v1/portal', auth);
    application.use('/api/v1/rooms', rooms);
    application.use('/api/v1/messages', messages);
    application.use('/api',wildcardHandler);
    application.use('*',
        (req, res, next)=>{dev_log('info','activated static route');next();},
        html
    );

}
