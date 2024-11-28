const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contact_management')
    .then(connexion => {

        const app = express();
        const port = 3000;
        app.use(express.json());

        const indexRoute = require('./routes/index.route');
        const contactRouter = require('./routes/contact.route');
        
        app.use('/', indexRoute);
        app.use('/contact', contactRouter);
        
        app.listen(port, () => {
            console.log("Application listening on port: " + port);
            
        });
    })
    .catch(error => {
        console.log('Erreur de connexion à MongoDB : ', error);
    });
