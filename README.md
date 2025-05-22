# API de Gerenciamento de Produtos

Este projeto é uma API RESTful desenvolvida em Node.js para gerenciar produtos. A API permite criar, atualizar, listar e deletar produtos, além de realizar validações nos dados de entrada.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
api-produtos
├── src
│   ├── app.js                     # Ponto de entrada da aplicação
│   ├── controllers
│   │   └── produtosController.js   # Controlador para gerenciar produtos
│   ├── routes
│   │   └── produtosRoutes.js       # Definição das rotas da API
│   ├── models
│   │   └── produto.js              # Modelo de dados para produtos
│   └── middlewares
│       └── validacaoProduto.js     # Middleware para validação de produtos
├── package.json                    # Configuração do npm
└── README.md                       # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd api-produtos
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`

## Endpoints

### Criar Produto

- **POST** `/produtos`
- Corpo da requisição:
  ```json
  {
    "nome": "Nome do Produto",
    "preco": 100.00,
    "descricao": "Descrição do Produto"
  }
  ```

### Listar Produtos

- **GET** `/produtos`

### Atualizar Produto

- **PUT** `/produtos/:id`
- Corpo da requisição:
  ```json
  {
    "nome": "Nome Atualizado",
    "preco": 150.00,
    "descricao": "Descrição Atualizada"
  }
  ```

### Deletar Produto

- **DELETE** `/produtos/:id`

## Validações

As validações para os dados de entrada são realizadas pelo middleware `validacaoProduto.js`, que garante que os campos obrigatórios estejam presentes e que os dados estejam no formato correto.

## Testando a API

Você pode usar ferramentas como Insomnia ou Postman para testar os endpoints da API. Certifique-se de enviar os dados no formato JSON e de definir o cabeçalho `Content-Type` como `application/json`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.