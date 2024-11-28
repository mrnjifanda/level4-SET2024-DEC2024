require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL)
.then(connexion => {

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // ROUTES
    const authRoutes = require('./routes/auth.route');
    const courseRoutes = require('./routes/course.route');
    const userRoutes = require('./routes/user.route');
    
    app.use('/api/auth', authRoutes);
    app.use('/api/courses', courseRoutes);
    app.use('/api/users', userRoutes);

    // THIS ROUTE IS JUST TO TEST JOI VALIDATION
    const indexRoutes = require('./routes/index.route');
    app.use('/', indexRoutes);
    // END TEST
   

    app.use((req, res, next) => {

        return res.status(404).json({
            status: 'NOT FOUND',
            status_code: 404,
            message: 'Requested resource not found.',
            data: {
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                url: req.originalUrl
            }
        });
    });

    app.use((error, req, res, next) => {

        const status_code = error.status || 500;
        return res.status(status_code).json({
            status: 'ERROR',
            status_code: status_code,
            message: error.message,
            data: {
                error: error.stack,
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                url: req.originalUrl
            }
        });
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((error) => console.error('Error connecting to MongoDB:', error));
