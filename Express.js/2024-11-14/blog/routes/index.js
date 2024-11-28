var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Seven Academy',
    description: 'Super website for seven students'
  });
});

module.exports = router;
