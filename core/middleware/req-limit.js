const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
    max:500, // is this safe??
    windowMs: 1*60*1000, // per min
    message:'too many requests, try in a few minutes'
});
