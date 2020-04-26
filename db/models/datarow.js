"use strict";
module.exports = (sequelize, DataTypes) => {
  const DataRow = sequelize.define(
    "DataRow",
    {
      time: DataTypes.DOUBLE,
      mileage: DataTypes.DOUBLE,
      rpm: DataTypes.DOUBLE,
      pm1m: DataTypes.DOUBLE,
      oscav: DataTypes.DOUBLE,
      svhal: DataTypes.DOUBLE,
      bikeName: DataTypes.STRING,
    },
    {}
  );
  DataRow.associate = function (models) {
    // associations can be defined here
  };
  return DataRow;
};
