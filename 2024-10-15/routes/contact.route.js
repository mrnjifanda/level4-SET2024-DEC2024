const { Router } = require('express');
const router = Router();

const contactController = require('../controllers/contact.controller');
const contactMiddleware = require('../middlewares/contact.middleware');

router.get('/', contactController.getAll);
router.get('/sort', contactMiddleware.sort, contactController.sortByQuery);
router.get('/:id', contactController.getOneById);
router.post('/create', contactMiddleware.create, contactController.createOne);
router.put('/update/:id', contactMiddleware.create, contactController.updateOneById);
router.delete('/delete/:id', contactController.deleteOneById);

module.exports = router;
