const express = require('express');
const cors = require('cors');
class Server { 
    //se ponne this y propiedad porque es lo mismo que declararla antes y en contructor inicializarla
    constructor(){
        this.app= express(); //App virn de express y inicializamos una instacia
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //mideleware
       this.mideleware();  //llaamos a nuestro metodo
       //rutas
       this.routes();
    }
    //METODO
     mideleware(){
    //cors
      this.app.use(cors());
     //con este midddleware le decimos que todo lo pasee a json en las peticiones del body
      this.app.use(express.json());
      //
      this.app.use(express.static('public')) //Recordar que buscara el directori y el index
     }
    

    //Metodo para rutas
    routes(){
            //USAMOS UN MIDDLEWARE y le empiamos el archivo de rutas
        this.app.use(this.usuariosPath, require('../routes/usuario') );

    }
    //METODO PARA ESCUCHAR
    listen(){
        this.app.listen(this.port, ()=> {
            console.log('servidor corriendo en el puerto', this.port )
        })
    }
}

module.exports = Server;