// REQ / RES
// express é um framework em node que ajuda a lidar com requisições e respostas.

import express from 'express'; //importando o express
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import errorHandler from './errors/handler';
import './database/connection'; //importando a conexão
import routes from './routes';

const app = express(); //criando a aplicação

app.use(cors());

app.use(express.json()); //indicando pro express que vamos usar API

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler);

// ROTA = conjunto app.get...
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE 
// GET = Buscar uma informação
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Parâmetros = 
// Query Params: http://localhost:3333/users?search=matheus
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)


app.listen(3333); //ouvindo a porta 3333, localhost:3333

// 3 formas de lidar com banco de dados em uma aplicação backend: 
// Driver nativo, Query Builder, ORM
