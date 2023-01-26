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


app.post("/upload-file", (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            res.status(400).send("Something went wrong!");
        }
        res.send(req.file);
    });
});

app.get('/', (req, res) => {
    res.send('This from server');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});