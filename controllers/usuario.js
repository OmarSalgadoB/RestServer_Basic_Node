const {  response , request} = require('express')

// req= request, res= response  es solo para el tipado
const getUsuarios = (req= request, res= response)=> {
    const { query="hola", limit=10, pag = 2} = req.query; //gracias a exppres ya noda un obj llmado query
    res.status(200).json({
        status: true,
        msg: 'Realizaste un metodo Get con exito',
        query,
        limit,
        pag
    })
  }

const postUsuario =  (req, res)=> {
    const {nombre , edad } = req.body;
    res.status(201).json({
        status: true,
        msg: 'Realizaste un metodo POST con exito',
        nombre,
        edad
    })
  }

  const putUsuario = (req, res)=> {
    //usamos desestructuracion por si enviams mas parametros  
    const { id } = req.params;
    res.json({
        status: true,
        msg: 'Realizaste un metodo PUT con exito',
        id
    })
  }

  const deleteUsuario =  (req, res)=> {
    res.json({
        status: true,
        msg: 'Realizaste un metodo DELETE con exito'
    })
  }
  module.exports = {
      getUsuarios,
      postUsuario,
      putUsuario,
      deleteUsuario
  }