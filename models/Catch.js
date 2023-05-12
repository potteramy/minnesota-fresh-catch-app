const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Catch extends Model {}


Catch.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
        unique: true
      }
    },
    fish_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Fish',
        key: 'id',
        unique: true
      }
    },
    lake_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_caught: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Catch'
  }
);

module.exports = Catch;