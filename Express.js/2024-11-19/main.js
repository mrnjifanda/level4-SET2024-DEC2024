const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'upload')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {

        const name = Date.now() + path.extname(file.originalname);
        cb(null, name);
    }
});

const upload = multer({ storage,
    limits: {
        fileSize: 1024 * 1024 // Equal to 1MB
    },
    fileFilter: (req, file, cb) => {

        const allowedTypes = [ 'image/jpeg', 'image/png' ];

        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images are allowed.'));
        }
    }
 });

app.post('/upload', upload.single('picture'), (req, res) => {

    return res.json({
        file_url: req.file.filename
    })
});

app.use((err, req, res, next) => {

    if (err instanceof multer.MulterError) {
        res.status(400).json({
            status_code: 400,
            status: 'UPLOAD_ERROR',
            message: err.message
        });
    } else if (err) {
        res.status(400).json({
            status_code: 400,
            status: 'ERROR',
            message: err.message
        });
    } else {
        next();
    }
});

app.listen(4000, () => {
    console.log('Application running on port 4000');
});
