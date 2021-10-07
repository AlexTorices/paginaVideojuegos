const Sequelize = require("sequelize")
const ConsolaVideojuego = (sequelize) => {
    sequelize.define('consolaVideojuego', {
        idCV:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        lanzamiento: Sequelize.STRING
    })
}

module.exports = ConsolaVideojuego