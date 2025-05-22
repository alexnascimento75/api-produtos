const Joi = require('joi');

// Definindo o esquema de validação para o produto
const produtoSchema = Joi.object({
    id: Joi.number().integer().positive().required(), // ID do produto, deve ser um número inteiro positivo
    nome: Joi.string().min(3).max(100).required(), // Nome do produto, deve ter entre 3 e 100 caracteres
    preco: Joi.number().positive().required(), // Preço do produto, deve ser um número positivo
    descricao: Joi.string().max(500) // Descrição do produto, opcional, até 500 caracteres
});

// Exportando o modelo Produto e o esquema de validação
module.exports = {
    produtoSchema
};