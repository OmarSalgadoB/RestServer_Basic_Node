require('dotenv').config();
const Server = require('./models/server');

//crramos una intacias y lo que esta en el construcuto se inicia
const server = new Server();

//ya solo con la intacia mandamos a llamar el metodo listen
server.listen();
 


