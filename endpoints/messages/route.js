// this endpoints are not yet implemented
const express = require('express');
const {getAllMessages} = require("./controller");
const {getAllMessagesFromRoom} = require("./controller");
const {useTokenForSetParams} = require("../users/controller");
const {routeGuard} = require("../../core/middleware/route-guard");

const Router = express.Router();

Router.use(routeGuard)

Router
    .route('/')
    .get(useTokenForSetParams,getAllMessages)

Router
.route('/:room')
    .get(getAllMessagesFromRoom)


module.exports = Router;
