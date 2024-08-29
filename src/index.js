const express = require('express');
const cep_endereco = require('./middlewares/cep-endereco.js');
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log("middleware 2");
    next();
})

app.post('/barbearia', (req,res, next) => {
    console.log("middleware 3");
    next();
}, cep_endereco, (req,res) => {
    console.log("post barbearia");
    res.json(req.body);
});

app.get('/agenda', (req,res) => {
    console.log("get agenda");
    res.json();
})

app.listen(port, function() {
    console.log(`Servidor ativo na porta ${port}`);
});