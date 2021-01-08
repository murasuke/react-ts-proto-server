'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Page1Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      select_id1: {
        type: Sequelize.INTEGER
      },
      select_id2: {
        type: Sequelize.INTEGER
      },
      select_id3: {
        type: Sequelize.INTEGER
      },
      select_id4: {
        type: Sequelize.INTEGER
      },
      text_id3: {
        type: Sequelize.STRING
      },
      text_id4: {
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
    await queryInterface.dropTable('Page1Data');
  }
};