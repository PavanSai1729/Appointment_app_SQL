const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment', 'root', 'Pavan@1729', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;