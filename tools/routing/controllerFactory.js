const {notFoundError} = require("../error.handling/_400");
const { catchAsync } = require("../error.handling/catchAsync");


module.exports.deleteOne = (Model,options) => catchAsync(async (req, res, next)=>{
    if (!options.message) options.message = 'deleted successfully'
    const deleted = await Model.findByIdAndDelete(req.params.id);

    if(!deleted){
        return next(notFoundError);
    }

    return res.status(204).json({
        status:"success",
        data:{deleted},
        message: options.message
    })
},'router')

module.exports.patchOne = (Model,options) => catchAsync(async (req, res, next)=>{
    // use only for not sensitive data...
    if (!options.message) options.message = 'updated successfully'
    const docPatched = await Model.findByIdAndUpdate(
        req.params.id,req.body,
        {runValidators: true,new:true}
    );
    
    if (!docPatched){
        return next(notFoundError);
    }

    return res.status(201).json({
        status:'success',
        data:{ data: docPatched},
        message:options.message
    })
},'router');

module.exports.getOne = (model, options) => catchAsync(async (req, res, next)=>{
    const  _resource = model.findById(req.params.id);
    let resource = null
    if (!options.message) options.message = 'resource sent'
    if (!options.select){
        resource = await _resource;
    }
    else if (options.select){
        resource = await _resource.select( options.select );
    } 
    if (!resource) next(notFoundError);
    return res.status(200).json({
        status:'succes',
    data:{
        data: resource
    },
    message:options.message
    })

},'router');

module.exports.getMany = (Model,options) => catchAsync(async (req, res, next )=>{
    if(!options.message) options.message = 'all coincidences sent'
    const docs = await Model.find().select('-__v');
    return res.status(200).json({
        status:'success',
        data:{data: docs},
        message: options.message
    })
},'router');

module.exports.postOne = (Model, options) => catchAsync(async (req, res, next)=>{
    if (!options.message) options.message ='created successfully' 
    let allowedFields = Object.create(null);
    if (!options.fields){ 
        allowedFields = req.body
    }else{
        options.fields.forEach(field => allowedFields[field] = req.body[field]);
    }
    const newDoc = await Model.create(allowedFields);
    
    return res.status(201).json({
        status:'success',
        data:{data: newDoc._id},
        message:options.message
    })
    
},'router');
