const express = require('express');

const server = express();

server.use(express.json());

// lojaderoupa(id,cliente,produto, fornecedor)

const lojaderoupa = [
    {id: 1, cliente: 'Cristina', produto: 'Blusa de Frio', fornecedor: 'Prada'},
    {id: 2, cliente: 'Angela', produto: 'Vestido', fornecedor:'Dolce e Gabbana'} 
]

server.get('/lojaderoupa', function(request, response) {
    response.json(lojaderoupa);
})
 
server.post('/lojaderoupa', function(request, response) {
   
    const {id, cliente, produto, fornecedor} = request.body;

    lojaderoupa.push({id, cliente, produto, fornecedor})
    response.status(204).send();
})

server.put('/lojaderoupa/:id', function(request, response) {
    const id = request.params.id;
    const {cliente, produto, fornecedor} = request.body;

   for(let i = 0; i < lojaderoupa.length; i++){
        if(lojaderoupa[i].id == id) {
            lojaderoupa[i].cliente = cliente;
            lojaderoupa[i].produto = produto;
            lojaderoupa[i].fornecedor = fornecedor;
            break;
        }
    }

    return response.status(204).send();

})

server.delete('/lojaderoupa/:id', function(request, response) {

    const id = request.params.id;

    for(let i = 0; i < lojaderoupa.length; i++){
        if(lojaderoupa[i].id == id) {
            lojaderoupa.splice(i, 1)
            break;
        }
    }

    return response.status(204).send();
})


server.listen(process.env.PORT || 3000);