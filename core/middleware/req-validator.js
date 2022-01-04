const {catchAsync} = require('./../../tools/error.handling/catchAsync')
const {validationResult} = require("express-validator");
const {User} = require("../../endpoints/users/schema");
const {body, cookie, header, param} = require("express-validator");
const ObjectId   = require('mongoose').Types.ObjectId;

const username_msg = 'name should be 5 to 50 alphanumeric Characters'
const email_msg = 'please use a unique and valid email'
const password_msg = 'password should be 12 characters at least,and must have number,' +
    'uppercase,lowercase,symbol'

//atomic validators
const isValidObjectId = id => ObjectId.isValid(id) ? (String(new ObjectId(id)) === id) : false;

function resolveValidation(req, res, next){
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return Promise.reject(errors.array())
    }
    else{
        next()
    }
}
async function objectIdValidator(req, field){
    await body(field)
        .isMongoId()
        .withMessage('a MongoDB ObjectId is required ')
        .run(req)
}
async function idListValidator(req, field){
    await body(field)
        .isArray()
        .custom((_Array)=>{
            const idMap = _Array.map(
                (item) => {
                    if (isValidObjectId(item)){
                        return null
                    } else {
                        return Promise.reject('a mongo Id is required')
                    }
                });
            return Promise.all(idMap)
        })
        .run(req)
}
async function usernameValidator(req,field = 'username',extended= false){
    if (!extended){
        await body(field)
            .not().isEmpty().withMessage('name is required').bail()
            .isLength({min: 5, max: 50})
            .withMessage(username_msg)
            .isAlphanumeric()
            .withMessage('Use only alphanumeric Characters a-z A-Z 0-9')
            .run(req);
    }
    if (extended){
        await body(field)
            .not().isEmpty().withMessage('username is required').bail()
            .isLength({min: 5, max: 50})
            .withMessage(username_msg)
            .run(req);
    }
}
async function passwordValidator(req, field_name){
    await body(field_name)
        .not().isEmpty().withMessage('password is required').bail()
        .isStrongPassword(
            {minLowercase:1,minLength:12,minNumbers:1,minSymbols:1,minUppercase:1}
        )
        .withMessage(password_msg)
        .bail()
        .run(req)
}
async function emailValidator(req, field_name){
    await body(field_name)
        .not().isEmpty().withMessage('email is required').bail()
        .isEmail()
        .withMessage(email_msg)
        .bail()
        .run(req)
}
async function uniqueEmailValidator(req){
    await emailValidator(req,'email')
    await body('email').custom(async value => {
            const matches = await User.findOne({'email': value}).countDocuments();
            if (matches > 0){
                throw Error(email_msg)
            }
        }
    ).run(req)
}
async function textValidator(req, field_name,opts){
    let options = Object.extend({}, opts || {})
    if (options.required){
        await body(field_name).not().isEmpty().withMessage(`${field_name} is required`)
    }
    if (options.min){
        await body(field_name)
            .isLength({min: options.min})
            .withMessage(`${field_name} is at least ${opts.min}`)
            .run(req)
    }
    if (options.max){
        await body(field_name)
            .isLength({max: options.max})
            .withMessage(`${field_name} is no more than ${opts.min} characters`)
            .run(req)
    }
    if (options.alphanum){
        await body(field_name)
            .isAlphanumeric()
            .withMessage(`${field_name} requires only alphanumeric characters`)
            .run(req)
    }
}

//compound validators
module.exports.createFactorySingleValidator = function(fieldType, fieldName){
    const opts = {
        'objectId': objectIdValidator,
        'email': emailValidator,
        'uniqueEmail': uniqueEmailValidator,
        'username': usernameValidator,
        'text': textValidator,
        'password': passwordValidator
    }
    return catchAsync(async function(req, res, next){
        await opts[fieldType](req,fieldName)
        return resolveValidation(req, res, next)
    },'validation');
}
module.exports.createRoomValidator = catchAsync(async function (req, res, next){
    await idListValidator(req, 'members') // changed after receive form-data
    await usernameValidator(req, 'roomName',true)
    return resolveValidation(req, res, next)
},'validation')
module.exports.createContactValidator = catchAsync(async function(req, res, next){
    await emailValidator(req,'email')
    await usernameValidator(req)
    return resolveValidation(req, res, next)
},'validation')
module.exports.loginValidator = catchAsync(async function (req, res, next){
    await emailValidator(req,'email')
    await passwordValidator(req, 'password')
    return resolveValidation(req,res, next)
},'validation')
module.exports.signUpValidator = catchAsync(async function (req, res, next){
    await usernameValidator(req)
    await uniqueEmailValidator(req)
    await passwordValidator(req,'password')
    return resolveValidation(req,res, next)
},'validation')
module.exports.cookieValidator = catchAsync(async function (req, res, next){
    //should test because cookie contains also a non hashed chunk
    await cookie().isHash('sha256').run(req)
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return Promise.reject(errors.array())
    }
    else{
        next()
    }
},'validation')
module.exports.paramValidator = catchAsync(async function paramValidatorFunc(req, res, next){
        if (req.params.id) {
            await param('id').isMongoId().run(req)
        }
        if (req.params.token) {
            await param('token').isHash("sha256").run(req)
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return Promise.reject(errors.array())
        }
        else{
            next()
        }
},'validation')
module.exports.headerValidator = catchAsync(async function (req, res, next){
    // should test and implement
    await header('authorization').isHash("sha256")
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return Promise.reject(errors.array())
    }
    else{
        next()
    }
},'validation')
module.exports.updatePassValidator = catchAsync(async function (req,res,next){
    await passwordValidator(req,'oldPassword')
    await passwordValidator(req,'updatedPassword')
    return resolveValidation(req, res, next)
},'validation')
module.exports.textValidator = async (field_name,opts)=>{
    return catchAsync(async (req, res, next)=>{
        await textValidator(req,opts)
        return resolveValidation(req, res, next)
    },'validation')
}





