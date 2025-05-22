const express = require('express'); // Importa o módulo express
const bodyParser = require('body-parser'); // Importa o body-parser para lidar com requisições JSON
const produtosRoutes = require('./routes/produtosRoutes'); // Importa as rotas de produtos

const app = express(); // Cria uma instância do aplicativo Express

app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON

// Define as rotas da API para produtos
app.use('/api/produtos', produtosRoutes());

// Define a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // Mensagem de confirmação ao iniciar o servidor
});