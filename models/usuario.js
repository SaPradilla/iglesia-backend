'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.STRING,
    tipo_documento: DataTypes.ENUM('CC','TI','CE','PPT','PP'),
    documento: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    contrasena:DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};