const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/Tabelas');

conexao.connect(error => {
  if(error){
    //para que não execute o resto do código
    throw error;
  }
  Tabelas.init(conexao);

  app = configExpress();

  app.listen(3000, () => {
    console.log('servidor na porta 3000')
  });

});

