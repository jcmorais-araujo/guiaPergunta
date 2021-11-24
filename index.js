// Importar o módulo express
const express = require("express");
const app = express();

// Informar ao Express usar o EJS como View engine (usar html no JS)
app.set('view engine', 'ejs');

// Criando uma rota e renderizando o arquivo ejs
app.get("/:nome/:linguagem", (requisicao, resposta) => {
    
    var nome = requisicao.params.nome;
    var linguagem = requisicao.params.linguagem;
    var exibirMsg = true;
    resposta.render("index",{
        nome: nome,
        linguagem: linguagem,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMsg
    });
});

// Criando o servidor na porta que desejo, nete caso a porta 8080
app.listen(8080, () =>{
    console.log("App rodando!");
});