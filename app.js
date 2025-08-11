const express = require('express');

//express aplicativo - configurando o acesso as funções
const app = express();

//registrar a visualização de engenharia
app.set('view engine', 'ejs');


//ouvindo as requisições na porta
app.listen(3001);

//acesando a rota
app.get('/', (req, res) => {
      res.render('index');
});

//nova rota
app.get('/sobre', (req, res) =>{
  res.render('sobre');
});

//redirecinamento de pagina
app.get('/sobrenos', (req, res) =>{
  res.redirect('./sobre');
});

//erro 404
app.use((req, res) => {
    res.status(404).render('404');
});
