const rota = require('express').Router();

const userController = require('../controllers/userController');
const { validateBody } = require('../middlewares/validateBody');
const schema = require('../schemas/userSchema');

rota.post('/user', validateBody(schema), userController.storeUser);
rota.put('/user/:id', validateBody(schema), userController.updateUSer);
rota.get('/user/:id', userController.findById);
rota.get('/user', userController.getAllUser);

module.exports = rota;