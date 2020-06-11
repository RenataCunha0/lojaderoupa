const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');

const pool = new Pool ({
    user: 'pzzxnxyiflvvvx',
    password: '1a11632ebb8084c2629b94ede08dd9e22384bc2c0fecf3630e90f919bb183b62',
    host: 'ec2-34-200-72-77.compute-1.amazonaws.com',
    database:'d3b0ifdkh03raf',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})

const server = express();

server.use(cors());

server.use(express.json());


// GET
server.get('/lojaderoupa', async function(request, response) {
   result = await pool.query('SELECT * FROM lojaderoupa');

   return response.json(result.rows);
})

server.get('/lojaderoupa/search', async function(request, response) {
    const cliente = request.query.cliente;
    const sql = `SELECT * FROM lojaderoupa WHERE cliente ILIKE $1`;
    const result = await pool.query(sql, ["%" +  cliente + "%"]);
    return response.json(result.rows);
})

server.get('/lojaderoupa/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `SELECT * FROM lojaderoupa WHERE id = $1`
    const result = await pool.query(sql, [id]);
    return response.json(result.rows);
})
 
//POST
server.post('/lojaderoupa', async function(request, response) {
    const cliente = request.body.cliente;
    const produto = request.body.produto;
    const fornecedor = request.body.fornecedor;
    const sql= `INSERT INTO lojaderoupa (cliente, produto, fornecedor) VALUES ($1, $2, $3)`;
    await pool.query(sql, [cliente, produto, fornecedor]);
    return response.status(204).send();
})

//DELETE
server.delete('/lojaderoupa/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `DELETE FROM lojaderoupa WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})


//UPDATE
server.put('/lojaderoupa/:id', async function(request, response) {
    const id = request.params.id;
    const { cliente, produto, fornecedor } = request.body;
    const sql = `UPDATE lojaderoupa SET cliente = $1, produto = $2, fornecedor = $3 WHERE id = $4`;
    await pool.query(sql, [cliente, produto, fornecedor, id]);
    return response.status(204).send();
})


server.listen(process.env.PORT || 3000);