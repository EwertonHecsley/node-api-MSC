const rota = require('express').Router();

const userController = require('../controllers/userController');
const { validateBody } = require('../middlewares/validateBody');
const schema = require('../schemas/userSchema');

rota.get('/', userController.getAllUser);
rota.get('/:id', userController.findById);
rota.post('/', validateBody(schema), userController.storeUser);

module.exports = rota;