'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sesion_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sesionId: {
        type: Sequelize.INTEGER,
        references:{
          model:'sesions',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      userRolId: {
        type: Sequelize.INTEGER,
        references:{
          model:'user_roles',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sesion_roles');
  }
};