const express = require('express');
const app = express();

const rotas = require('./routers');

app.use(express.json());

app.use('/user', rotas.userRouter);
app.use('/user', rotas.storeRouter);

module.exports = app;