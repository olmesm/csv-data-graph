import Chartjs from "chart.js";
import { useRef, useEffect } from "react";

const colours = [
  "#7b1289",
  "#195c4d",
  "#9dd105",
  "#eec75b",
  "#78cece",
  "#b62d42",
];

const formatOscav = (_data) => {
  const data = _data.map(({ mileage, oscav }) => ({ x: mileage, y: oscav }));
  const hexColour = colours[1];

  return {
    label: "label",
    backgroundColor: `${hexColour}30`,
    borderColor: hexColour,
    borderWidth: 1,
    data,
  };
};

export const Chart = ({ graphData }) => {
  const elCharto = useRef(null);
  const ds = graphData.map((data, i) => formatOscav(data));

  const x = {
    type: "scatter",
    data: {
      datasets: ds,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  useEffect(() => {
    if (!elCharto) {
      return;
    }

    new Chartjs(elCharto.current, x);
  }, [graphData]);

  return (
    <div style={{ position: "relative", height: "40vh", width: "80vw" }}>
      <canvas ref={elCharto}></canvas>
    </div>
  );
};
