import { Op } from "sequelize";
import models from "../../db/models";

export default async (req, res) => {
  const graphData = await Promise.all([
    models.DataRow.findAll({
      order: [["mileage", "ASC"]],
      where: {
        rpm: {
          [Op.lt]: 4000,
        },
      },
    }),
    models.DataRow.findAll({
      order: [["mileage", "ASC"]],
      where: {
        rpm: {
          [Op.gte]: 4000,
          [Op.lt]: 5000,
        },
      },
    }),
    models.DataRow.findAll({
      order: [["mileage", "ASC"]],
      where: {
        rpm: {
          [Op.gte]: 5000,
        },
      },
    }),
  ]);

  return res.send(graphData);
};
