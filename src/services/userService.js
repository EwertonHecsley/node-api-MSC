const { format } = require('date-fns')
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');


const getAllUser = async () => {
    const result = await userModel.getAllUser();
    if (result.length === 0) return result;
    result.forEach((user) => {
        const dateFormated = format(user.data_criacao, 'dd/MM/yyyy');
        user.data_criacao = dateFormated
    });
    return result;
};

const storeUser = async ({ nome, email, senha }) => {
    const verifyEmailUser = await userModel.findUserByEmail(email);
    if (verifyEmailUser) return { mensagem: 'Email já cadastrado.' };
    const passwordCrypted = await bcrypt.hash(senha, 8);
    const result = await userModel.storeUser({ nome, email, senha: passwordCrypted });
    return result;
};

const findById = async (id) => {
    const result = await userModel.findById(id);
    if (!result) return { mensagem: 'Usuário não encontrado para o ID selecionado.' };
    const dateFormated = format(result.data_criacao, 'dd/MM/yyyy');
    result.data_criacao = dateFormated;
    const { senha: _, ...resultFormated } = result
    return resultFormated;
};

const updateUser = async ({ id, nome, email, senha }) => {
    const result = await userModel.findById(id);
    if (!result) return { mensagem: 'Usuário não encontrado para o ID selecionado.' };
    const resultEmail = await userModel.findUserByEmail(email);
    if (resultEmail) return { mensagem: 'Email já cadastrado.' };
    const passwordCrypted = await bcrypt.hash(senha, 8);
    const resultUpdated = await userModel.updateUser({ id, nome, email, senha: passwordCrypted });
    return resultUpdated;
};

const destroyUser = async (id) => {
    const user = await userModel.findById(id);
    if (!user) return { mensagem: 'Usuário não encontrado para o ID selecionado.' };
    await userModel.destroyUser(id);
}

module.exports = {
    getAllUser,
    storeUser,
    findById,
    updateUser,
    destroyUser
}
