'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sesion_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sesion_roles.belongsTo(models.user_roles,{
        foreignKey:'userRolId'
      })
      sesion_roles.belongsTo(models.sesion,{
        foreignKey:'sesionId'
      })
    }
  }
  sesion_roles.init({
    sesionId: DataTypes.INTEGER,
    userRolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sesion_roles',
  });
  return sesion_roles;
};