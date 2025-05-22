module.exports.validarProduto = (req, res, next) => {
    const { nome, preco, descricao } = req.body;

    // Verifica se o nome do produto está presente
    if (!nome) {
        return res.status(400).json({ error: 'O nome do produto é obrigatório.' });
    }

    // Verifica se o preço do produto está presente e é um número
    if (preco === undefined || typeof preco !== 'number') {
        return res.status(400).json({ error: 'O preço do produto é obrigatório e deve ser um número.' });
    }

    // Verifica se a descrição do produto está presente
    if (!descricao) {
        return res.status(400).json({ error: 'A descrição do produto é obrigatória.' });
    }

    // Se todas as validações passarem, chama o próximo middleware
    next();
};