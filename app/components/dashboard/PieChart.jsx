"use client";
import styles from "./PieChart.module.css";

import { Chart as ChartJS, ArcElement } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement);

const data = {
  datasets: [
    {
      data: [14, 31, 55],
      backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      borderWidth: 0,
    },
  ],
};

const PieChart = ({ pieCartData }) => {
  const [currentData, setCurrentData] = useState("May-June 2021");
  const data = {
    datasets: [
      {
        data: pieCartData.find((l) => l.duration === currentData).products,
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className={styles.pieChartContainer}>
      <div className={styles.pieChartHeader}>
        <span className={styles.title}>Top products</span>
        <select
          className={styles.select}
          value={currentData}
          onChange={(e) => setCurrentData(e.target.value)}
        >
          {pieCartData.map((d) => (
            <option className={styles.option} value={d.duration}>
              {d.duration}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <Pie data={data} />
        </div>
        <div className={styles.chartDetails}>
          <div className={styles.chartDetail}>
            <div className={styles.leftContainer}>
              <span
                className={`${styles.colorDot} ${styles.colorDotGreen}`}
              ></span>
            </div>
            <div className={styles.rightContainer}>
              <span className={styles.detailTitle}>Basic Tees</span>
              <span className={styles.percent}>
                {`${
                  pieCartData.find((l) => l.duration === currentData)
                    .products[2]
                }%`}
              </span>
            </div>
            <div className={styles.leftContainer}>
              <span
                className={`${styles.colorDot} ${styles.colorDotYellow}`}
              ></span>
            </div>
            <div className={styles.rightContainer}>
              <span className={styles.detailTitle}>Custom Short Pants</span>
              <span className={styles.percent}>
                {`${
                  pieCartData.find((l) => l.duration === currentData)
                    .products[1]
                }%`}
              </span>
            </div>
            <div className={styles.leftContainer}>
              <span
                className={`${styles.colorDot} ${styles.colorDotRed}`}
              ></span>
            </div>
            <div className={styles.rightContainer}>
              <span className={styles.detailTitle}>Super Hoodies</span>
              <span className={styles.percent}>
                {`${
                  pieCartData.find((l) => l.duration === currentData)
                    .products[0]
                }%`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
