'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Warehouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.STRING
      },
      productstatuss_id: {
        type: Sequelize.INTEGER
      },
      product_number: {
        type: Sequelize.STRING
      },
      product_cost: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      unitMoney: {
        type: Sequelize.STRING
      },
      Suppliers: {
        type: Sequelize.STRING
      },
      Suppliers_address: {
        type: Sequelize.STRING
      },
      Suppliers_phone: {
        type: Sequelize.STRING
      },
      createdBy: {
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
    await queryInterface.dropTable('Warehouses');
  }
};