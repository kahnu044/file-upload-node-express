# file-upload-node-express

File Upload API

```
URL : localhost:3000/upload-file
Method : POST
Key Name: upload_image
```

Success Response
```
{
    "success": true,
    "message": "File uploaded successfully",
    "data": {
        "fieldname": "upload_image",
        "originalname": "About_Header_img.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "newFileName": "0a81dd19-11da-4f70-8dca-917df1dd223d.jpg",
        "destination": "./uploads",
        "filename": "0a81dd19-11da-4f70-8dca-917df1dd223d.jpg",
        "path": "uploads/0a81dd19-11da-4f70-8dca-917df1dd223d.jpg",
        "size": 423946
    }
}
```

Packages

```
express
multer
uuid
```
