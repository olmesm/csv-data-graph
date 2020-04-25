'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DataRows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.DOUBLE
      },
      mileage: {
        type: Sequelize.DOUBLE
      },
      rpm: {
        type: Sequelize.DOUBLE
      },
      pm1m: {
        type: Sequelize.DOUBLE
      },
      oscav: {
        type: Sequelize.DOUBLE
      },
      svhal: {
        type: Sequelize.DOUBLE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DataRows');
  }
};