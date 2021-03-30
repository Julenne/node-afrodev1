const configExpress = require('./config/configExpress');

const app = configExpress();

app.listen(3000, () => {
  console.log('servidor na porta 3000')

});