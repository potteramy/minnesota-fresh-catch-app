const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the model
class Fish extends Model {}

// create fields/columns for the model
Fish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fish_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fish_length: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    lake_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lake',
        key: 'id',
        unique: true
      }
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
    modelName: 'fish'
  }
);

module.exports = Fish;