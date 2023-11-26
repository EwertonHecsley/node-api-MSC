const { format } = require('date-fns')
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');


const getAllUser = async () => {
    const result = await userModel.getAllUser();
    result.forEach((user) => {
        const dateFormated = format(user.data_criacao, 'dd/MM/yyyy');
        user.data_criacao = dateFormated
    })
    return result;
};

const storeUser = async ({ nome, email, senha }) => {
    const passwordCrypted = await bcrypt.hash(senha, 8);
    const result = await userModel.storeUser({ nome, email, senha: passwordCrypted });
    return result;
};

const findById = async (id) => {
    const result = await userModel.findById(id);
    const dateFormated = format(result.data_criacao, 'dd/MM/yyyy');
    result.data_criacao = dateFormated;
    const { senha: _, ...resultFormated } = result
    return resultFormated;
};

module.exports = {
    getAllUser,
    storeUser,
    findById
}
