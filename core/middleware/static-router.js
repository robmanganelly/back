const path = require('path');

const staticRouter = require('express').Router()

staticRouter
    .get('*',
        (req,res,next)=>{
        const file = path.join(__dirname,"..","..","html",'index.html')
        return res.sendFile(file)
    })

module.exports = staticRouter;



