const { Router } = require('express');
const Contact = require('../models/Contact');
const router = Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'About us' });
});

router.get('/contact-us', function(req, res, next) {

  const { message } = req.query;
  res.render('contact-us', { title: 'Contact us', message });
});

router.post('/submit-form', function(req, res, next) {

  const data = req.body;
  let message = '';
  Contact.create(data)
         .then(save => {
            message = 'Data saved successfully'
         })
         .catch(error => {
            message = "Error saving data";
         })
         .finally(() => {
            res.redirect('/contact-us?message=' + message);
         });
});

module.exports = router;
