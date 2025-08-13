const express = require('express');

//express aplicativo - configurando o acesso as funções
const app = express();

//registrar a visualização de engenharia
app.set('view engine', 'ejs');


//ouvindo as requisições na porta
app.listen(3001);

//acesando a rota
app.get('/', (req, res) => {
  //pasando parametros para o body
  const blogs = [
       {titulo: 'chamander', conteudo: 'a ponta de seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte.'},
      {titulo: 'squirtle', conteudo: 'seu casco reduz a resistencia contra a água fazendo com que ele nade mais rapido'},
      {titulo: 'bulbasur', conteudo: 'evoluir o bulbo começa a desabrochar até se tornar uma grade flor na evolução final'}, 
  ];
      res.render('index', { titulo: 'home', blogs});
});

//nova rota
app.get('/sobre', (req, res) =>{

  res.render('sobre', { titulo: 'sobre'});
});

//redirecinamento de pagina
app.get('/sobrenos', (req, res) =>{
  res.redirect('./sobre');
});


//rota da criação do conteudo
app.get('/blog/criar', (req, res) => {
  res.render('criar',{ titulo: 'criar novo blog'});
});


//erro 404
app.use((req, res) => {
    res.status(404).render('404',{ titulo: '404'});
});
