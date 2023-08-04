'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      Order: {
        type: Sequelize.STRING
      },
      Change_content: {
        type: Sequelize.STRING
      },
      ChangeBy: {
        type: Sequelize.STRING

      },
      CreatedBy: {
        type: Sequelize.STRING
      },
      Unit: {
        type: Sequelize.INTEGER
      },
      ViewByuser: {
        type: Sequelize.STRING
      },
      ViewByStaff: {
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
    await queryInterface.dropTable('Notifications');
  }
};