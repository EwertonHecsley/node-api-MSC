const joi = require('joi');

const userSchema = joi.object({
    nome: joi.string().required().messages({
        'string.base': 'O campo nome deve ser do tipo texto.',
        'any.required': 'O campo é nome é obrigatório.',
        'string.empty': 'O campo nome não pode ser vazio.'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'O campo é email é obrigatório.',
        'string.empty': 'O campo email não pode ser vazio.',
        'string.base': 'O campo email deve ser do tipo texto.',
        'string.email': 'Deve ser um email válido.'
    }),
    senha: joi.string().required().min(4).messages({
        'string.base': 'O campo senha deve ser do tipo texto.',
        'any.required': 'O campo é senha é obrigatório.',
        'string.empty': 'O campo senha não pode ser vazio.',
        'string.min': 'A senha deve ter no mínimo 4 caracteres.'
    })
});

module.exports = userSchema;