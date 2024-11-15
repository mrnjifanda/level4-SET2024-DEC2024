const { Router } = require('express');
const router = Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'About us' });
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact-us', { title: 'Contact us' });
});

router.post('/submit-form', function(req, res, next) {

  console.log(req.body);
  res.send('Form submitted successfully');
});

module.exports = router;
