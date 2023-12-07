'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // M:M | Pivote Entregas Elemento consumible
      roles.hasMany(models.user_roles,{
        as:'UserRoles',
        foreignKey:'rolId'
      })
      roles.belongsToMany(models.usuario,{
        through:'user_roles',
        foreignKey:'rolId'
      })
    }
  }
  roles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};