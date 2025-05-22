// Importa o express e o controller de produtos
const express = require('express');
const ProdutosController = require('../controllers/produtosController');
const validarProduto = require('../middlewares/validacaoProduto');

// Cria um roteador express
const router = express.Router();

// Define a rota para listar todos os produtos
router.get('/produtos', ProdutosController.listarProdutos);

// Define a rota para criar um novo produto com validação
router.post('/produtos', validarProduto, ProdutosController.criarProduto);

// Define a rota para atualizar um produto existente com validação
router.put('/produtos/:id', validarProduto, ProdutosController.atualizarProduto);

// Define a rota para deletar um produto
router.delete('/produtos/:id', ProdutosController.deletarProduto);

// Exporta o roteador para ser utilizado no app.js
module.exports = router;