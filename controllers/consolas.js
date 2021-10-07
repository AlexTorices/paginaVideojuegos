const path = require('path')
const consola = require('../utils/database').models.consola

exports.getAll = (req, res)=>{
    consola.findAll()
    .then(videojuegos=>{
        console.log(videojuegos)
        res.json(videojuegos)
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.new = (req, res)=>{
    consola.create(req.body)
        .then(result => {
            res.json({
                status:"Consola creada existosamente",
                consola: req.body
            })
        })
        .catch((err)=>{
            console.log(err)
            res.json({status:"Error while creating consola"})
        })
}
