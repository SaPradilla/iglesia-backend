'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles',[
    {
      name:'Padre',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name:'Predricador',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:'Colaborador ',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ])

  },

  async down (queryInterface, Sequelize) {
    await   queryInterface.bulkDelete('roles', null, {})
  }
};
