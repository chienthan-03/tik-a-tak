import { render } from 'ejs'
import multer from 'multer'
import pool from '../configs/mysql/connectDB'

class uploadController {
    async upFile(req, res, next) {
        return res.render('upload')    
    }
    
    async handleUpLoadFile(req, res, next) {
        console.log(req.file)
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            } else if (!req.file) {
                return res.send('Please select an image to upload');
            } 
            // Display uploaded image for user validation
            res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr/><a href="/upload">Upload another image</a>`);
        }

    async handleUpLoadMultiple(req, res, next) {
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }  else if (!req.files) {
                return res.send('Please select least an image to upload');
            } 
            let result = "You have uploaded these images: <hr />";
            const files = req.files;
            let index, len;
    
            // Loop through all the uploaded images and display them on frontend
            for (index = 0, len = files.length; index < len; ++index) {
                result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
            }
            result += '<hr/><a href="/upload">Upload more images</a>';
            return res.send(result);
    }

}

module.exports = new uploadController