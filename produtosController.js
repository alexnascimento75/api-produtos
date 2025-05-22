const produtos = []; // Array para armazenar produtos em memória

class ProdutosController {
    // Método para listar todos os produtos
    listarProdutos(req, res) {
        res.status(200).json(produtos);
    }

    // Método para criar um novo produto
    criarProduto(req, res) {
        const { nome, preco, descricao } = req.body;

        // Cria um novo produto
        const novoProduto = {
            id: produtos.length + 1, // Gera um ID simples
            nome,
            preco,
            descricao
        };

        produtos.push(novoProduto); // Adiciona o novo produto ao array
        res.status(201).json(novoProduto); // Retorna o produto criado
    }

    // Método para atualizar um produto existente
    atualizarProduto(req, res) {
        const { id } = req.params;
        const { nome, preco, descricao } = req.body;

        const produtoIndex = produtos.findIndex(prod => prod.id === parseInt(id));

        if (produtoIndex === -1) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        // Atualiza os dados do produto
        produtos[produtoIndex] = { id: parseInt(id), nome, preco, descricao };
        res.status(200).json(produtos[produtoIndex]); // Retorna o produto atualizado
    }

    // Método para deletar um produto
    deletarProduto(req, res) {
        const { id } = req.params;

        const produtoIndex = produtos.findIndex(prod => prod.id === parseInt(id));

        if (produtoIndex === -1) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        produtos.splice(produtoIndex, 1); // Remove o produto do array
        res.status(204).send(); // Retorna status 204 sem conteúdo
    }
}

module.exports = new ProdutosController(); // Exporta uma instância do controlador