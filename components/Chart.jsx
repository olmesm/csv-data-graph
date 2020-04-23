import Chartjs from "chart.js";
import { useRef, useEffect } from "react";

const chartData = {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "3500RPM",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [
          { x: 12, y: 12 },
          { x: 19, y: 19 },
          { x: 3, y: 3 },
          { x: 5, y: 5 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
        ],
      },

      {
        label: "5000RPM",
        backgroundColor: "rgba(0, 99, 132, 0.2)",
        borderColor: "rgba(0, 99, 132, 1)",
        borderWidth: 1,
        data: [
          { x: 2, y: 12 },
          { x: 1, y: 19 },
          { x: 13, y: 3 },
          { x: 5, y: 15 },
          { x: 2, y: 12 },
          { x: 3, y: 13 },
        ],
      },
    ],
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

export const Chart = () => {
  const elCharto = useRef(null);

  useEffect(() => {
    if (!elCharto) {
      return;
    }

    new Chartjs(elCharto.current, chartData);
  }, []);

  return <canvas ref={elCharto} width="400" height="400"></canvas>;
};
