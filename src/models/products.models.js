const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Products = db.define('movies', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isAvaible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

})

module.exports = Products;