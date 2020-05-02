import { useState, useEffect } from "react";

import { Layout } from "../components/Layout";
import { Chart } from "../components/chart";
import models from "../db/models";

const RPM_FILTERS = ["3500", "4500", "5500"];

const BikeSelected = ({ bikeDisplay }) => {
  if (!bikeDisplay) {
    return <></>;
  }

  return (
    <>
      <br />
      {`You have selected: ${bikeDisplay}`}
      <hr />
    </>
  );
};

const ButtonRow = ({ list, selectorCallback }) => {
  if (!Array.isArray(list) && !list.length > 0) {
    return <></>;
  }

  return (
    <div>
      {list.map((option) => (
        <span key={option}>
          <button onClick={() => selectorCallback(option)}>{option}</button>{" "}
        </span>
      ))}
    </div>
  );
};

const BikeChart = ({ bikeName, rpmMax, rpmMin }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!bikeName && !rpmMax && !rpmMin) return;

    try {
      (async () => {
        const data = await fetch(
          "/api/get-data?" + new URLSearchParams({ bikeName, rpmMax, rpmMin })
        ).then((response) => response.json());
        setData(data);
      })();
    } catch (e) {
      console.trace(e);
    }
  }, [bikeName, rpmMax, rpmMin]);

  if (!bikeName) return <>Please select a bike</>;

  if (!rpmMax || !rpmMin) {
    return <>Please set an RPM Range</>;
  }

  return <Chart graphData={[data]} />;
};

export default ({ bikeList }) => {
  const [bikeDisplay, setBikeDisplay] = useState(0);
  const [rpmMin, setRpmMin] = useState(3000);
  const [rpmMax, setRpmMax] = useState(4000);

  return (
    <Layout>
      <ButtonRow list={bikeList} selectorCallback={setBikeDisplay} />

      <ButtonRow
        list={RPM_FILTERS}
        selectorCallback={(rpm) => {
          const _rpm = parseInt(rpm, 10);
          setRpmMax(_rpm + 500);
          setRpmMin(_rpm - 500);
        }}
      />

      <BikeSelected bikeDisplay={bikeDisplay} />
      <BikeSelected bikeDisplay={`RPM range of ${rpmMin} - ${rpmMax}`} />

      <h2>Oscav</h2>
      <BikeChart bikeName={bikeDisplay} rpmMax={rpmMax} rpmMin={rpmMin} />
    </Layout>
  );
};

export async function getStaticProps() {
  const bikeList = await models.DataRow.aggregate("bikeName", "DISTINCT", {
    plain: false,
  }).map(({ DISTINCT }) => DISTINCT);

  return {
    props: {
      bikeList,
    },
  };
}
