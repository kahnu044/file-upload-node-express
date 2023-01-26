const express = require('express');
const app = express();
const port = 3000;

const multer = require('multer');
const path = require('path');

// Generate random string
const uuid = require("uuid");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {

        // Get the uploaded file extension
        const extname = path.extname(file.originalname).toLowerCase();

        // Rename uploaded file name
        const newFileName = uuid.v4() + extname;

        // Assign the new file name to the uploaded file so that it can be used later to store in database
        file.newFileName = newFileName;

        cb(null, file.newFileName);
    }
});

const upload = multer({ storage: storage }).single("upload_image");

app.get('/', (req, res) => {
    // Response from server
    return res.status(200).json({
        success: true,
        message: 'Response from server : connected to server',
    });
});

app.post("/upload-file", (req, res) => {

    upload(req, res, (err) => {

        // If the upload fails
        if (err) {
            return res.status(400).json({
                success: false,
                message: 'File upload failed',
                error: err
            });
        }

        // Upload successfully
        return res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
            data: req.file
        });
    });
});



app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});