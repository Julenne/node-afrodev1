const Agendamento = require('../models/Agendamento');
module.exports = app => {
  //se atenatar à semântica do nome das rotas
  app.get('/agendamentos', (req, resp) => {
    Agendamento.listagem(resp);
  });
  app.post('/agendamentos', (req, resp) => {
    const agendamento = req.body;
    Agendamento.inserir(agendamento, resp);
  });

  app.get('/agendamentos/:id', (req, resp) => {
    const id = parseInt(req.params.id)
    Agendamento.buscaPorId(id, resp)
  })
};
