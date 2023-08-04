'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      usersname: {
        type: Sequelize.STRING
      },
      addressDetail: {
        type: Sequelize.STRING
      },
      resetPasswordPin: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      group_id: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.BLOB
      },
      Account_number: {
        type: Sequelize.STRING
      },
      Bank_name: {
        type: Sequelize.STRING
      },
      provincecustomer_id: {
        type: Sequelize.INTEGER

      },
      districtcustomer_id: {
        type: Sequelize.INTEGER

      },
      wardcustomer_id: {
        type: Sequelize.INTEGER

      },
      Position: {
        type: Sequelize.STRING
      },
      shippingunit_id: {
        type: Sequelize.INTEGER

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
    await queryInterface.dropTable('Users');
  }
};