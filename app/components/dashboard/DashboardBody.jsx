import DashboardCards from "./DashboardCards";
import Header from "./Header";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Schedule from "./Schedule";
import styles from "./DashboardBody.module.css";
import axios from "axios";

const DashboardBody = async () => {
  const response = await axios.get(`${process.env.BASE_URL}/api/data`);

  const { cardData, lineChart, pieChart } = response.data.data;

  return (
    <div className={styles.dashboardBodyContainer}>
      <Header />
      <DashboardCards cardData={cardData} />
      <LineChart lineChartData={lineChart} />
      <div className={styles.pieScheduleContainer}>
        <PieChart pieCartData={pieChart} />
        <Schedule />
      </div>
    </div>
  );
};

export default DashboardBody;
