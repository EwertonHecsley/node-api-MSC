const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const getAllUser = async () => {
    const result = await userModel.getAllUser();
    return result;
};

const storeUser = async ({ nome, email, senha }) => {
    const passwordCrypted = await bcrypt.hash(senha, 8);
    const result = await userModel.storeUser({ nome, email, senha: passwordCrypted });
    return result;
}

module.exports = {
    getAllUser,
    storeUser
}
