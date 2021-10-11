const path = require('path')
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego

exports.postAgregarConsolaVideojuego = (req, res)=>{
    console.log(req.body)
    ConsolaVideojuego.create(req.body)
        .then(result =>{
            console.log("ConsolaVideojuego creado exitosamente")
            res.json({estado:"aceptado"})
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

/*exports.getConfirmacionDatos = (req, res)=>{
    res.send('Confirmacion datos')
}*/

exports.getObtenerConsolaVideojuego = (req,res)=>{
    ConsolaVideojuego.findAll()
    .then(cv=>{
        console.log(cv)
        res.json(cv)
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}


exports.postBorrarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVideojuego.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Registro eliminado")
        res.json("eliminado")
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.postActualizarConsolaVideojuego = (req,res)=>{
    console.log(req.body.keys)
    ConsolaVideojuego.update({
        lanzamiento: req.body.lanzamiento
        },{
        where:{
            idCV: req.body.idCV
        }
    })
    .then(()=>{
        console.log("Registro actualizado")
        res.json("actualizado")
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}