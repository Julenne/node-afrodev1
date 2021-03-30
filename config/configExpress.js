const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
  //cria a aplicação
  const app = express();

  app.use(bodyParser.json());

  //inclui tudo o que está na pasta controllers dentro do app
  consign()
    .include('controllers')
    .into(app)

  return app;
}