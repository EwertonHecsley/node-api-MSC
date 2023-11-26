const rota = require('express').Router();

const userController = require('../controllers/userController');

rota.get('/', userController.getAllUser);
rota.get('/:id', userController.findById);
rota.post('/', userController.storeUser);

module.exports = rota;