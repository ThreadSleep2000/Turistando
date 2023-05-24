const express = require('express'); 

const server = express(); 
server.use (express.json());


// Listar Somente Um - GET - localhost:3000/destino/1

const destinoArray = ['São Paulo', 'Nova York']
server.get('/destino/:indiceInput', (req, res) => {

    const { indiceInput } = req.params
    return res.json({ destino: `O ID dO destino pedido foi ${destinoArray[indiceInput]}` })
})


//Listar Todos Destinos - GET - http://localhost:3000/destino/0

server.get ('/destino', (req, res) =>{

    return res.json(destinoArray);
})


// Novo Destino - POST - http://localhost:3000/destino/

server.post('/destino', (req, res) => {
    
    const { nomeDestino } = req.body;

    destinoArray.push (nomeDestino);

    return res.json (destinoArray);
})

// Alterar Destino - PUT - http://localhost:3000/destino/1

server.put ('/destino/:indice', (req, res) =>{

    const {indice} = req.params;
    const {nomeDestino} = req.body;

    destinoArray[indice] = nomeDestino;

    return res.json(destinoArray);
})


// Deletar - DELETE - http://localhost:3000/destino/1

server.delete ('/destino/:indice', (req, res) => {
    const { indice } = req.params;

    destinoArray.splice(indice,1);

    return res.json (destinoArray);
})



server.listen(3000);
