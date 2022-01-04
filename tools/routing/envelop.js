
module.exports.envelop = (resource, message= "data successfully sent")=>{
    return {
        status: 'success',
        data: {data: resource},
        message
    }
}
