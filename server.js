const express = require('express');
const app = express();
const port = 3000;

const multer = require('multer');
const upload = multer({dest:'uploads/'}).single("upload_image");


app.post("/image", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
       res.status(400).send("Something went wrong!");
     }

     console.log(req.file);


     res.send(req.file);
   });
 });

app.get('/', (req, res) => {
    res.send('This from server');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});