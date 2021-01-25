const sequelize = require('sequelize');
var db;
db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/storage.db'
});

const mod = db.define('url', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    full: sequelize.DataTypes.STRING,
    short: {
        type: sequelize.DataTypes.STRING,
        unique: true
    }
})
module.exports = {db, mod}