const express = require('express')
// Mini aplicación de express
const router = express.Router()
const vjController = require('../controllers/videojuegos')
const consolasController = require('../controllers/consolas')

/* // Formulario para dar de alta videojuegos
router.get('/agregarVideojuego', vjController.getAgregarVideojuego)*/
/* // Pagina de confirmacion
router.get('/confirmacionDatos', vjController.getConfirmacionDatos)*/

// Servicio para procesar los datos del formulario CREATE
router.post('/agregarVideojuego', vjController.postAgregarVideojuego)
//Consulta de videojuegos READ
router.get('/obtenerVideojuegos', vjController.getObtenerVideojuegos)
// Eliminar videojuego DELETE
router.post('/borrarVideojuego', vjController.postBorrarVideojuego)
// Actualziar videojuego UPDATE
router.post('/actualizarVideojuego', vjController.postActualizarVideojuego)

router.get('/consolas', consolasController.getAll)

module.exports = router