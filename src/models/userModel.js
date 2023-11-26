const knex = require('../conection');

const getAllUser = async () => {
    const user = await knex('usuarios').orderBy('id');
    return user;
};

const storeUser = async ({ nome, email, senha }) => {
    const user = await knex('usuarios')
        .insert({ nome, email, senha })
        .returning(['id', 'nome', 'email']);
    return user[0];
}

module.exports = {
    getAllUser,
    storeUser
}