import multer from 'multer'
import path from 'path'
import express from 'express'
import imageFilter from '../helpers/imageFilter'
import uploadController from '../controllers/upload'
const appRoot = require('app-root-path')
const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {cb(null, appRoot + "/src/public/image/")},
    filename: (req, file, cb) => {cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))}   
})
let upload = multer({storage: storage, fileFilter: imageFilter})
let uploadmultiple = multer({storage: storage, fileFilter: imageFilter}).array('multiple_images', 3)

// 'profile_pic' is the name of our file input field in the HTML form
router.post('/upload-proflie-pic', upload.single('profile_pic'), uploadController.handleUpLoadFile)
router.post('/upload-multiple-pic',(req, res, next) => {
    uploadmultiple(req, res, (err) => {
        if(err instanceof multer.MulterError && err.code === "LIMIT_EXCEEDED_FILE") {
            res.send('LIMIT_EXCEEDED_FILE')
        } else if(err) {
            res.send(err)
        } else {
            next()
        }
    })
}, uploadController.handleUpLoadMultiple)
router.get('/', uploadController.upFile)

module.exports = router