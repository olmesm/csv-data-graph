"use strict";

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DataRows",
      [
        {
          time: 2065.03649,
          mileage: 16112.0,
          rpm: 3875.0,
          pm1m: 53.3,
          oscav: 1015.0,
          svhal: 880.0,
          createdAt,
          updatedAt,
        },
        {
          time: 5979.7371,
          mileage: 16208.0,
          rpm: 3355.0,
          pm1m: 52.3,
          oscav: 967.0,
          svhal: 570.0,
          createdAt,
          updatedAt,
        },
        {
          time: 11956.182775,
          mileage: 16336.0,
          rpm: 3674.0,
          pm1m: 56.3,
          oscav: 968.0,
          svhal: 530.0,
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("DataRow", null, {});
  },
};
