const { Router } = require('express');
const router = Router();
const indexController = require('../controllers/index.controller');

router.get('/', indexController.welcome);
router.get('/about-us', indexController.aboutUs);

module.exports = router;