require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/produtos', require('./controllers/produto_controller'))
app.use('/postagem', require('./controllers/postagem_controller'))

console.log('Conectando ao banco de dados...');
mongoose.connect(process.env.URL_BANCO_DE_DADOS).then(()=>{
    console.log('Conectando ao banco de dados com sucesso!')
    app.listen(parseInt(process.env.PORTA_SERVIDOR),() =>{
        console.log(`O servidor está no ar em http://localhost:${process.env.PORTA_SERVIDOR}`);
    });
});

