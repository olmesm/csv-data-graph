import { Op } from "sequelize";
import models from "../../db/models";

export default async (req, res) => {
  const { bikeName, rpmMax, rpmMin } = req.query;

  const data = await models.DataRow.findAll({
    order: [["mileage", "ASC"]],
    where: {
      bikeName,
      rpm: {
        [Op.lt]: rpmMax,
        [Op.gt]: rpmMin,
      },
    },
  });

  return res.send(data);
};
