const { Router} =require('express');
const { getUsuarios, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuario');


const router = Router(); //cremoas una varible con la funcion router


router.get( '/' , getUsuarios); //mandamos a llamr el controlador a esa funcion

router.post('/', postUsuario);

//con e sto le decimos que en la url enviara un id y exppress lo pasea y ya nos da la varibale
router.put('/:id', putUsuario);

router.delete('/', deleteUsuario);

module.exports= router