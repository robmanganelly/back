const sharp = require('sharp');
const path = require('path');
const multer = require('multer');
const AppError = require('./error.handling/appError')
const {dev_log} = require("./error.handling/unc-except-logger");

const mimetypes = {
    'image/png':'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'

}

const appStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        const validMimeType = mimetypes[file.mimetype]
        let error = new AppError(`wrong mimetype ${file.mimetype}`)

        if (validMimeType){
            error = null;
        }
        callback(error, 'tools/static/img')
    },
    filename:(req, file, callback) =>{
        const extension = mimetypes[file.mimetype];
        callback(null,`profile_${Date.now()}_${req.user._id}.${extension}`);
    }
});




// image handling using sharp module... (dropped after using MEAN stack)
async function imageResizing(req, res, next){
    try {    
        if (!req.file) {
            dev_log('calling next on no file <multer upload>')
            return next()}
        await sharp(req.file[0].buffer)
        .resize(200,200)
        .toFormat('jpeg',{})
        .jpeg({quality: 90})
        .toFile(path.join(__dirname,'../../static/img',req.file[0].filename));
        next();
    } catch (error) {
        console.log('error on resizing image');
        console.log(error);
        return new AppError('oops....',500);
    }
}

module.exports.upload = multer({storage: appStorage });
module.exports.imageResize = imageResizing;
