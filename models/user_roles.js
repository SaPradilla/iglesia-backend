'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_roles.belongsTo(models.roles,{
        foreignKey:'rolId'
      })
      user_roles.belongsTo(models.usuario,{
        foreignKey:'userId'
      })

      // M:M
      user_roles.hasMany(models.sesion_roles,{
        as:'SesionRoles',
        foreignKey:'userRolId'
      })
      user_roles.belongsToMany(models.sesion,{
        through:'sesion_roles',
        foreignKey:'userRolId'
      })

    }
  }
  user_roles.init({
    rolId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_roles',
  });
  return user_roles;
};