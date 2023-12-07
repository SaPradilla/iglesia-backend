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
      sesion.belongsTo(models.templo,{
        foreignKey:'lugar'
      })
      // M:M
      sesion.hasMany(models.sesion_roles,{
        as:'SesionRoles',
        foreignKey:'sesionId'
      })
      sesion.belongsToMany(models.user_roles,{
        through:'sesion_roles',
        foreignKey:'sesionId'
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