const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConfig/database');

const User = sequelize.define('User', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('customer', 'agent'),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = User;
