require('dotenv').config();
const knex = require('knex');

const config = {
    client: process.env.BD_CLIENT,
    Connection: {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        user: process.env.BD_USER,
        database: process.env.BD_DATABASE,
        password: process.env.BD_PASSWORD
    }

};

const connection = knex(config);

module.exports = connection;
