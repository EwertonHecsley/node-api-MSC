const express = require('express');
const app = express();

const rotas = require('./routers');

app.use(express.json());

app.use('/', rotas.storeRouter);
app.use('/', rotas.findRouter);
app.use('/', rotas.updateRouter);
app.use('/', rotas.destroyRouter);
app.use('/', rotas.userRouter);

module.exports = app;