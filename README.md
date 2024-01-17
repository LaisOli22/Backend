# Projeto de Extensão - Backend

Este é o backend para o Projeto de Extensão, que gerencia produtos usando Fastify e Prisma.

## Descrição

O projeto visa criar uma aplicação de backend para um sistema de gerenciamento de produtos. Utiliza o framework Fastify para construir a API e o Prisma como ORM para interagir com o banco de dados PostgreSQL.

## Funcionalidades

- Listar todos os produtos
- Adicionar um novo produto ao banco de dados

## Configuração

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

### Instalação de Dependências

```bash
npm install

```
### Rotas
GET /products

- Retorna uma lista de todos os produtos.

Exemplo:
curl http://localhost:3001/products

GET /products/:productname/:price

- Adiciona um novo produto ao banco de dados com o nome e preço fornecidos.

Exemplo:
curl http://localhost:3001/products/banana/2.5
