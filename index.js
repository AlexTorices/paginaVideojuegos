//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
// const bodyParser = require("body-parser")
const vjRoutes = require('./routes/videojuegos')
const sequelize = require('./utils/database')
//Creación de la aplicación web
const app = express();

// Middleware
app.use(express.static(path.join(__dirname,'public')))
// Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Renderizar archivos html como ejs
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use("/videojuegos", vjRoutes);

//Que la aplicaioón escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8082,()=>{
        console.log("Aplicación web en línea en el puerto 8082")
        })
    })
    .catch(err=>console.log(err))
