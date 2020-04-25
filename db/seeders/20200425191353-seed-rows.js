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
        {
          time: 76948.701615,
          mileage: 16608.0,
          rpm: 4850.0,
          pm1m: 45.4,
          oscav: 796.0,
          svhal: 460.0,
          createdAt,
          updatedAt,
        },
        {
          time: 81080.564095,
          mileage: 16672.0,
          rpm: 5443.0,
          pm1m: 58.3,
          oscav: 1223.0,
          svhal: 580.0,
          createdAt,
          updatedAt,
        },
        {
          time: 85643.3153,
          mileage: 16752.0,
          rpm: 4393.0,
          pm1m: 43.7,
          oscav: 676.0,
          svhal: 410.0,
          createdAt,
          updatedAt,
        },
        {
          time: 89882.33342,
          mileage: 16816.0,
          rpm: 5589.0,
          pm1m: 60.9,
          oscav: 1226.0,
          svhal: 480.0,
          createdAt,
          updatedAt,
        },
        {
          time: 92550.506845,
          mileage: 16848.0,
          rpm: 5365.0,
          pm1m: 58.6,
          oscav: 1051.0,
          svhal: 450.0,
          createdAt,
          updatedAt,
        },
        {
          time: 100804.31976,
          mileage: 17008.0,
          rpm: 4223.0,
          pm1m: 52.3,
          oscav: 1027.0,
          svhal: 480.0,
          createdAt,
          updatedAt,
        },
        {
          time: 156635.29566,
          mileage: 17072.0,
          rpm: 4245.0,
          pm1m: 47.7,
          oscav: 1067.0,
          svhal: 950.0,
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
