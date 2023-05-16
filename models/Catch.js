const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Catch extends Model {}

Catch.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
        unique: true,
      },
    },
    fish_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fish_length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lake_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_caught: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Catch",
  }
);

module.exports = Catch;
