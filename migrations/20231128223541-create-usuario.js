'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.STRING
      },
      tipo_documento: {
        type: Sequelize.ENUM('CC','TI','CE','PPT','PP')
      },
      documento: {
        type: Sequelize.STRING,
        unique:true
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      contrasena:{
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('usuarios');
  }
};