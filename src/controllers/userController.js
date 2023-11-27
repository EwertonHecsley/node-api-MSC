const userService = require('../services/userService');

const getAllUser = async (_req, res) => {
    try {
        const result = await userService.getAllUser();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor', erro: error.message });
    };

};

const storeUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const result = await userService.storeUser({ nome, email, senha });
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor', erro: error.message });
    };
};

const findById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.findById(id);
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor', erro: error.message });
    };
};

const updateUSer = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
        await userService.updateUser({ id, nome, email, senha });
        return res.status(200).json({ mensagem: 'Usuário atualizado com sucesso.' });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor', erro: error.message });
    };
};

module.exports = { getAllUser, storeUser, findById, updateUSer }