const knex = require('../conection');

const getAllUser = async () => {
    const user = await knex('usuarios').select(['id', 'nome', 'email', 'data_criacao']).orderBy('id');
    return user;
};

const storeUser = async ({ nome, email, senha }) => {
    const user = await knex('usuarios')
        .insert({ nome, email, senha })
        .returning(['id', 'nome', 'email']);
    return user[0];
};

const findById = async (id) => {
    const result = await knex('usuarios').where({ id }).first();
    return result;
}

module.exports = {
    getAllUser,
    storeUser,
    findById
}