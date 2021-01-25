const sequelize = require('sequelize');
var db;
if(process.env.DATABASE_URL)db = new sequelize(process.env.DATABASE_URL)
else {
    db = new sequelize({
        dialect: 'sqlite',
        storage: __dirname + '/storage.db'
    });
}

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