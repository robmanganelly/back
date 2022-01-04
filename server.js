const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
// if missing the config file, app will fail

require('./tools/error.handling/unc-except-logger');


const { Server } = require('socket.io');
const app = require('./core/app');

const {socketIoConfig} = require("./core/middleware/socket-io");


//middleware: passes all middleware after created app.
require('./core/middleware/app-wide')(app);

const httpServer = require('http').createServer(app);
require('./core/db-connection'); // io config can not be ? before db connection

const io = new Server(httpServer, {
    cors: {
        // origin: "*",
        origin: true,
        methods: ["GET", "POST","PATCH","PUT","DELETE", "OPTIONS"],
        /*credentials: true*/ // for private apis
        credentials: false,
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Content-Security-Policy']
    }});

io.on('connection',( socket)=>{
    return socketIoConfig(socket,io)
});

const PORT  = process.env.PORT || 3000;
httpServer.listen(+PORT,()=>{console.log(`running ${process.env.NODE_ENV} server on port ${PORT}...` )});




