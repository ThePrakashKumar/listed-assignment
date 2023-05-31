"use client";
import styles from "./LineChart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const data = {
  labels: ["", "Week1", "Week2", "Week3", "Week4", ""],
  datasets: [
    {
      data: [200, 400, 200, 300, 220, 430],
      fill: false,
      borderColor: "#E9A0A0",
      tension: 0.4,
      pointRadius: 0,
    },
    {
      data: [100, 400, 150, 450, 180, 230],
      fill: false,
      borderColor: "#9BDD7C",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "gray",
      },
    },
    y: {
      min: 0,
      max: 500,
      ticks: {
        // forces step size to be 100 units
        stepSize: 100,
        stepWidth: 40,
        color: "gray",
      },
    },
  },
  ticks: {
    font: {
      family: "Lato",
      size: 14,
    },
  },
};
const LineChart = () => {
  return (
    <div className={styles.lineChartContainer}>
      <div className={styles.title}>Activities</div>
      <div className={styles.lineChartHeader}>
        <select className={styles.select}>
          <option className={styles.option}>May-June 2021</option>
        </select>
        <div className={styles.labels}>
          <div className={styles.label}>
            <span className={`${styles.labelDot} ${styles.labelDotRed}`}></span>
            <span className="styles.labelText">Guest</span>
          </div>
          <div className="styles.label">
            <span
              className={`${styles.labelDot} ${styles.labelDotGreen}`}
            ></span>
            <span className="styles.labelText">User</span>
          </div>
        </div>
      </div>
      <div className={styles.lineChart}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
