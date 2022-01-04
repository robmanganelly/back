const express = require('express');
const {getContact, getAllContacts, updateContact, deleteContact, profileUpdating} = require("./controller");
const {createContactValidator} = require("../../core/middleware/req-validator");
const {createFactorySingleValidator} = require("../../core/middleware/req-validator");
const {updatePassValidator, paramValidator} = require("../../core/middleware/req-validator");
const route = express.Router()
const {
    getUser, getUsers,
    postUser, patchUser,
    getMe, useTokenForSetParams,
    deleteUser, passwordUpdating, createContact
} = require('./controller');
const {routeGuard, allowOnly} = require('../../core/middleware/route-guard');
const {upload} = require('../../tools/multer-config');


route.use(routeGuard); // all routes below require a logged user


route
    .route('/Me')
    .get(
        useTokenForSetParams,
        getMe
    )


route
    .route('/Me/profile')
    .patch(upload.single('file'),profileUpdating)
route
    .route('/Me/password')
    .patch(
        updatePassValidator,
        passwordUpdating
    )

route
    .route('/Me/contacts')
    .get(
        useTokenForSetParams,
        getAllContacts
    )
    .post(
        useTokenForSetParams,
        createContactValidator,
        createContact
    )

route
    .route('/Me/contacts/details')
    .get(
        useTokenForSetParams,
        createFactorySingleValidator('email','email' ),
        getContact
    )
    .patch(
        useTokenForSetParams,
        updateContact
    )
    .delete(
        useTokenForSetParams,
        deleteContact
    )





route.use(allowOnly('admin'))  // all routes below are only for administration purpose

route
    .route('/')
    .get(getUsers)
    .post(postUser)

// .get(paramValidator,getUser)
route
    .route('/:id')
    .get(paramValidator, getUser)
    .patch(patchUser)
    .delete(deleteUser)


module.exports = route;
