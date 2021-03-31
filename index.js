const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');

const app = configExpress();

conexao.connect( error => {
  if(error){
    //para que não execute o resto do código
    throw error;
  }
  
  app.listen(3000, () => {
    console.log('servidor na porta 3000')
  });

});

