const express = require('express');
const {catchAsync} = require("../../tools/error.handling/catchAsync");
const {dev_log} = require("../../tools/error.handling/unc-except-logger");
const {upload} = require("../../tools/multer-config");
const {routeGuard} = require("../../core/middleware/route-guard");
const {useTokenForSetParams} = require("../users/controller");
const {createRoomValidator} = require("../../core/middleware/req-validator");
const { getUserRooms, createRoom } = require('./controller');

const Router = express.Router();

Router.use(routeGuard)

Router
    .route('/')
    .get(useTokenForSetParams, getUserRooms)
    .post(useTokenForSetParams,upload.single('file'),(req, res, next)=>{
        dev_log('snif on request body')
        console.log(req.body);next();
    },createRoomValidator,createRoom)



module.exports = Router;
