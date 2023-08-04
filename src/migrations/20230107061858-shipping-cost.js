'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shippingcosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shippingunit_id: {
        type: Sequelize.INTEGER

      },

      From: {
        type: Sequelize.STRING
      },
      To: {
        type: Sequelize.STRING
      },
      Cost: {
        type: Sequelize.STRING

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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Shippingcosts');
  }
};