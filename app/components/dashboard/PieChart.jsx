"use client";
import styles from "./PieChart.module.css";

import { Chart as ChartJS, ArcElement } from "chart.js";
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

const PieChart = () => {
  return (
    <div className={styles.pieChartContainer}>
      <div className={styles.pieChartHeader}>
        <span className={styles.title}>Top products</span>
        <select className={styles.select}>
          <option className={styles.option}>May-June 2021</option>
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
              <span className={styles.percent}>55%</span>
            </div>
            <div className={styles.leftContainer}>
              <span
                className={`${styles.colorDot} ${styles.colorDotYellow}`}
              ></span>
            </div>
            <div className={styles.rightContainer}>
              <span className={styles.detailTitle}>Custom Short Pants</span>
              <span className={styles.percent}>31%</span>
            </div>
            <div className={styles.leftContainer}>
              <span
                className={`${styles.colorDot} ${styles.colorDotRed}`}
              ></span>
            </div>
            <div className={styles.rightContainer}>
              <span className={styles.detailTitle}>Super Hoodies</span>
              <span className={styles.percent}>14%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
