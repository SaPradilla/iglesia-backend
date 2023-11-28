'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sesion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sesion.belongsTo(models.templo,{
        foreignKey:'lugar'
      })
    }
  }
  sesion.init({
    fecha_inicion: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    duracion: DataTypes.STRING,
    lugar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sesion',
  });
  return sesion;
};