const sequelize = require('sequelize');
var db;
if(process.env.DATABASE_URL)db = new sequelize('postgres://tycofzxwcwrqpy:d6f798b8c73c36420f977c43f09049c9fec247c020e8fa1cbb742f2aad7feeb8@ec2-34-235-240-133.compute-1.amazonaws.com:5432/dctlbtsqq5ubv8', {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
else db = new sequelize({
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