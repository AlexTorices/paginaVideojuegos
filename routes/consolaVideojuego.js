const express = require('express')
// Mini aplicación de express
const router = express.Router()
const cvController = require('../controllers/consolaVideojuego')

// Servicio para procesar los datos del formulario CREATE
router.post('/agregarConsolaVideojuego', cvController.postAgregarConsolaVideojuego)
//Consulta de videojuegos READ
router.get('/obtenerConsolaVideojuegos', cvController.getObtenerConsolaVideojuego)
// Eliminar videojuego DELETE
router.post('/borrarConsolaVideojuego', cvController.postBorrarConsolaVideojuego)
// Actualziar videojuego UPDATE
router.post('/actualizarConsolaVideojuego', cvController.postActualizarConsolaVideojuego)

module.exports = router