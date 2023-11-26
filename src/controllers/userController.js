const userService = require('../services/userService');

const getAllUser = async (_req, res) => {
    try {
        const result = await userService.getAllUser();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor', erro: error.message });
    }

};

const storeUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const result = await userService.storeUser({ nome, email, senha });
        return res.status(201).json({ usuario: result });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor', erro: error.message });
    }

}

module.exports = { getAllUser, storeUser }