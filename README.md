# API de Autenticação com Bcrypt

Este é um projeto simples de API desenvolvida com **Express.js** para demonstrar o funcionamento da biblioteca **bcrypt** para hash de senhas. Ele contém duas rotas principais: uma para registrar novos usuários e outra para login. As senhas são armazenadas com hash usando o bcrypt para garantir a segurança.

## Funcionalidades

- **Registro de Usuário (`POST /signup`)**: Registra um novo usuário com uma senha criptografada.
- **Login de Usuário (`POST /login`)**: Valida o login de um usuário comparando a senha fornecida com o hash armazenado.
- **Listar Usuários (`GET /users`)**: Retorna todos os usuários registrados (para fins de teste).

## Como Usar

### 1. Instalar dependências

Execute o seguinte comando para instalar as dependências do projeto:

``bash
npm install

### 2. Executar o servidor
Inicie o servidor Express.js:

``bash
npm start
O servidor estará disponível em http://localhost:3000.

### 3. Endpoints
POST /signup

Rota para registrar um novo usuário.

Exemplo de requisição:

POST /signup
{
  "username": "clarissa",
  "password": "123456"
}

Resposta de sucesso:
{
  "message": "Usuário cadastrado com sucesso!"
}
POST /login

Rota para realizar login de um usuário.

Exemplo de requisição:

POST /login
{
  "username": "clarissa",
  "password": "123456"
}
Resposta de sucesso:

{
  "message": "Login realizado com sucesso!"
}
GET /users

Rota para listar todos os usuários cadastrados (para fins de teste).

Resposta:
{
  "users": [
    {
      "username": "clarissa",
      "password": "$2b$12$..."
    }
  ]
}

### Tecnologias Utilizadas
Node.js
Express.js
bcrypt


