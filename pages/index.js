import { Op } from "sequelize";
import { useState } from "react";

import { Layout } from "../components/Layout";
import { Chart } from "../components/chart";
import models from "../db/models";

const BIKE_LIST = ["PD082", "PD083", "PD084"];
const FILTER = ["oscav", "svhalf"];

export default ({ graphData }) => {
  const [bikeIndex, setBikeIndex] = useState(0);
  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <Layout>
      {BIKE_LIST.map((bike, index) => (
        <span key={bike}>
          <button onClick={() => setBikeIndex(index)}>{bike}</button>{" "}
        </span>
      ))}
      <br />
      {`You have selected: ${BIKE_LIST[bikeIndex]}`}
      <hr />

      <h2>oscav</h2>
      <Chart graphData={graphData} />
      <hr />
      <h2>svhalf</h2>
      <Chart graphData={graphData} />
    </Layout>
  );
};

export async function getStaticProps() {
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

  return {
    props: {
      graphData: JSON.stringify(graphData),
    },
  };
}
