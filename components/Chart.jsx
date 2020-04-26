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

const rpmList = ["3500RPM", "4500RPM", "5500RPM"];

// const chartData = {
//   type: "scatter",
//   data: {
//     datasets: [
//       {
//         label: "3500RPM",
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//         data: [
//           { x: 12, y: 12 },
//           { x: 19, y: 19 },
//           { x: 3, y: 3 },
//           { x: 5, y: 5 },
//           { x: 2, y: 2 },
//           { x: 3, y: 3 },
//         ],
//       },

//       {
//         label: "5000RPM",
//         backgroundColor: "rgba(0, 99, 132, 0.2)",
//         borderColor: "rgba(0, 99, 132, 1)",
//         borderWidth: 1,
//         data: [
//           { x: 2, y: 12 },
//           { x: 1, y: 19 },
//           { x: 13, y: 3 },
//           { x: 5, y: 15 },
//           { x: 2, y: 12 },
//           { x: 3, y: 13 },
//         ],
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
// };

const formatOscav = (label, hexColour, _data) => {
  const data = _data.map(({ mileage, oscav }) => ({ x: mileage, y: oscav }));

  return {
    label,
    backgroundColor: `${hexColour}30`,
    borderColor: hexColour,
    borderWidth: 1,
    data,
  };
};

export const Chart = ({ graphData }) => {
  const elCharto = useRef(null);
  const _graphData = JSON.parse(graphData);

  console.log(_graphData.map((d, i) => formatOscav(rpmList[i], colours[i], d)));

  const x = {
    type: "scatter",
    data: {
      datasets: _graphData.map((d, i) =>
        formatOscav(rpmList[i], colours[i], d)
      ),
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
  }, []);

  return <canvas ref={elCharto} width="400" height="400"></canvas>;
};
