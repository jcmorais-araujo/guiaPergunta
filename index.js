// Importar o módulo express
const express = require("express");
const app = express();

// Informar ao Express usar o EJS como View engine (usar html no JS)
app.set('view engine', 'ejs');

// Informar ao Express que desejo utilizar arquivos estáticos (css, js, imagens e etc)
app.use(express.static('public'));

// Criando uma rota e renderizando o arquivo ejs
app.get("/", (requisicao, resposta) => {
    resposta.render('index');
});

app.get("/perguntar", (requisicao, resposta) => {
    resposta.render("perguntar");
} )


// Criando o servidor na porta que desejo, nete caso a porta 8080
app.listen(8080, () => {
    console.log("App rodando!");
});