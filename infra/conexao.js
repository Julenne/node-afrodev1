const mysql = require('mysql');

const conexao = mysql.createConnection({
  host:'localhost',
  port:3360,
  user: 'root',
  password: 'root',
  database: 'agenda'
});

module.exports = conexao