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
};

const findUserByEmail = async (email) => {
    const result = await knex('usuarios').where({ email }).first();
    return result;
};

const updateUser = async ({ id, nome, email, senha }) => {
    const result = await knex('usuarios')
        .update({ nome, email, senha })
        .where({ id })
        .returning(['id', 'nome', 'email']);
    return result[0];
}

module.exports = {
    getAllUser,
    storeUser,
    findById,
    findUserByEmail,
    updateUser
}