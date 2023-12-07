'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rolId: {
        type: Sequelize.INTEGER,
        references:{
          model:'roles',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:'usuarios',
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
    await queryInterface.dropTable('user_roles');
  }
};