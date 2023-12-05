'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class templo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      templo.hasOne(models.sesion,{
        foreignKey:'lugar'
      })


    }
  }
  templo.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    capacidad: DataTypes.STRING,
    estado: DataTypes.ENUM('arrendado','propio')
  }, {
    sequelize,
    modelName: 'templo',
  });
  return templo;
};