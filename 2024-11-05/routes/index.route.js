const { Router } = require('express');
const router = Router();

const indexController = require('../src/controllers/index.controller');
const { validForm } = require('../src/middlewares/validations/form.validation');
const authMiddleware = require('../src/middlewares/auth.middleware');

router.post('/', authMiddleware.isLogin,authMiddleware.isAdmin, validForm, indexController.testValidationWithJoi);

module.exports = router;
