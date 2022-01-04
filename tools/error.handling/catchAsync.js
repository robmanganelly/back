
// the conditional execution was intended for dealing with differences on error format 
// if another validator used change the strings allowed
exports.catchAsync = (handler,source='caught-exception')=>{
    return (req, res, next) => {
            handler(req, res, next).catch( err => {
                if (Array.isArray(err)){
                    err.forEach(e=> e.sourceErr = source)
                }else if(!!err.sourceErr){
                    return next(err)
                }else{
                    err.sourceErr = source;
                }
                return next(err)} );
    }
};


