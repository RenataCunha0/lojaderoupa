// yarn add pg

const Pool = require('pg').Pool;

//1 - Abrir a conexão
//2 - Executar o comando SQL (query, insert)
//3 - Fechar a conexão

const pool = new Pool ({
    user: 'pzzxnxyiflvvvx',
    password: '1a11632ebb8084c2629b94ede08dd9e22384bc2c0fecf3630e90f919bb183b62',
    host: 'ec2-34-200-72-77.compute-1.amazonaws.com',
    database:'d3b0ifdkh03raf',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})

//const sql = `
//    CREATE TABLE IF NOT EXISTS lojaderoupa
//    (
//        id serial primary key,
//        cliente varchar (200),
//        produto varchar (200),
//        fornecedor varchar (200)
//   )
//
//`;


// pool.query(sql, function(error, result) {
//    if(error)
//        throw error
//        
//    console.log ('Tabela criada com sucesso!');    
//
//});

 //INSERT
//const sql_insert = `
//        INSERT INTO lojaderoupa (cliente, produto, fornecedor) VALUES ('Alice','Vestido','Prada')
//`;

//pool.query(sql_insert, function(error, result) {
//   if(error)
//        throw error;

//   console.log(result.rowCount);
//})

//SELECT
// const sql_select = `SELECT * FROM lojaderoupa`;

// pool.query(sql_select, function(error, result) {
//    if(error)
//         throw error;

//     console.log(result.rows);
// })