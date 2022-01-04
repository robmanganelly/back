const {promisify} = require('util');
const jwt = require('jsonwebtoken');


const AppError = require('../../tools/error.handling/appError');
const createHandlerFor = require('../../tools/routing/controllerFactory');
const {bodyFilter} = require("../../tools/routing/bodyFilter");
const {lackOfPermissionsError} = require("../../tools/error.handling/_400");
const {jwtSign} = require('../../tools/routing/jwtHandler');
const {User, Contact} = require('./schema');
const {catchAsync} = require('../../tools/error.handling/catchAsync');

//profile
async function passwordUpdatingFunction(req, res, next) {

    const {oldPassword, updatedPassword} = req.body;
    if (!oldPassword || !updatedPassword || (oldPassword === updatedPassword)) {
        return next(new AppError('Invalid input, please provide both the current and new password. Don\'t use the same ', 400))
    }

    let token = null;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token) return next(lackOfPermissionsError);

    const payload = await promisify(jwt.verify)(token, process.env.JWT_KEY);

    const user = await User.findById(payload.id);
    if (!user || !(await user.verifyPassword(oldPassword))) return next(lackOfPermissionsError);

    user.password = updatedPassword;
    await user.save();

    const newToken = jwtSign(user._id);

    return res.status(200).json({
        status: 'success',
        token: newToken
    })
}

async function profileUpdatingFunction(req, res, next){ // todo review
    // not allowed for password role or email, or any other sensitive field
    if (req.body.password || req.body.role || req.body.email ) return next(new AppError(
        'not allowed to edit sensitive fields',403))
    let filtered = bodyFilter(req,'username', 'photo');
    if (req.file) filtered.photo = req.file.filename;

    const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        filtered,
        {runValidators: true, new:true}
    );

    if (!updatedUser) return next(new AppError('user can not be found',400));

    return res.status(200).json({
        status:'success',
        data:{data: updatedUser},
        message: 'user successfully updated'
    })
}

function setIdParam(req, res, next) {
    req.params.id = req.user._id
    next()
}

// contacts
async function getContactFunction(req, res, next) {
    // needs a user id.
    // needs a email for a contact.
    const {id} = req.params;
    const {email} = req.body;
    if (!email) {
        return next(new AppError('missing contact email to look for', 400))
    }

    const user = await User.findById(id).select('+contacts');
    if (!user) {
        return next(new AppError('invalid credentials, please login again', 401))
    }
    if(!(user.contacts.includes(email))){
        return next(new AppError(`you do not have ${email} as a contact`,404))
    }
    const contact = await Contact.findOne({email, parentId:id}).select()

    return res.status(200).json({status: 'success', data: {data: contact}, message: 'contact sent'})

}

async function getAllContactsFunction(req, res, next) {
    // needs a user id

    const {id} = req.params;
    if (!id) return next(new AppError('invalid credentials, please login again', 401))

    const contacts = await Contact.find({parentId: id})
        .sort( 'username email')
        .select('username email userId' );

    return res.json({
        status: 'success',
        data: {data: contacts},
        message: 'All contacts sent'
    })

}

async function createContactFunction(req, res, next) {
    // requires id, logged users only
    const {id} = req.params;
    const {username, email} = req.body;

    if (!username || !email) {
        return next( new AppError('malformed request on creating contact, missing required fields', 400)
        )
    }

    const contactUser = await User.findOne({email});

    if (!contactUser) {
        return next( new AppError('this email is not registered on this server', 400)
        )
    }
    const contact = await Contact.create({
        userId: contactUser._id,
        parentId:id,
        username,
        email,
    })

    if (!contact) {
        return next(new AppError('failed to create new Contact', 400)
        )
    }

    const updatedContactUser = await User.findByIdAndUpdate(
        id, {
            $push: {contacts: email}
        }, {new: true}
    )

    console.log(`debug: updated User: ${updatedContactUser}`)

    return res.status(201).json(
        {status: 'success', data: {data: contact}, message: 'contact created'}
    )
}

async function updateContactFunction(req, res, next) {
    // needs email...
    const {id} = req.params;
    const {username, email} = req.body;

    if (!email || !username || !id){
        return next(new AppError('missing required fields to update Contact ',400))
    }

    const user = await User.findById(id);

    if (!user || !user.contacts.includes(email)){
        return next(new AppError('the user does not have the requested email',401))
    }

    const updated = await Contact.findOneAndUpdate(
        {parentId: id, email},
        {$set:{"username": username}},
        {returnOriginal: false}
        );

    if (!updated){
        return next(new AppError('update failed',400))
    }

    return res.status(201).json({
        status: 'success',
        data: {data: updated},
        message: 'user successfully updated'
    })

}

async function deleteContactFunction(req, res, next) {
    // logic  here...
    const { id } = req.params;
    const { email } = req.body;

    if (!email || !id){
        return next(new AppError('malformed request',400))
    }

    const deleted = await Contact.findOneAndDelete({parentId: id, email });

    if (deleted){
        await User.findByIdAndUpdate(id,
            {$pull:{contacts: email}},{multi: true}
        )
        return res.status(204).json({
            status:'success',
            data:{data:null},
            message:'contact deleted'
        });
    }

    return next(new AppError('The required contact can not be found',400))

}



//catchAsync wraps the try-catch block logic
module.exports.profileUpdating = catchAsync(profileUpdatingFunction,'router');
module.exports.passwordUpdating = catchAsync(passwordUpdatingFunction,'router');
module.exports.useTokenForSetParams = setIdParam;
module.exports.getMe = createHandlerFor.getOne(User, {
    message: 'user successfully sent',
    select: 'photo username email tokenExpiration'
});
module.exports.getUser = createHandlerFor.getOne(User, {message: 'user successfully sent'});
module.exports.getUsers = createHandlerFor.getMany(User, {
    message: 'users sent !!',
    populate: {select: 'photo username email'}
});
module.exports.postUser = createHandlerFor.postOne(User, {message: 'user created successfully'});
module.exports.patchUser = createHandlerFor.patchOne(User, {message: 'changes saved successfully'});
module.exports.deleteUser = createHandlerFor.deleteOne(User, {message: 'user deleted successfully'});

module.exports.createContact = catchAsync(createContactFunction,'router');
module.exports.getContact = catchAsync(getContactFunction,'router');
module.exports.getAllContacts = catchAsync(getAllContactsFunction,'router');
module.exports.updateContact = catchAsync(updateContactFunction,'router');
module.exports.deleteContact = catchAsync(deleteContactFunction,'router');
