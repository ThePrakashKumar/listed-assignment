import DashboardCards from "./DashboardCards";
import Header from "./Header";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Schedule from "./Schedule";
import styles from "./DashboardBody.module.css";

const DashboardBody = () => {
  return (
    <div className={styles.dashboardBodyContainer}>
      <Header />
      <DashboardCards />
      <LineChart />
      <div className={styles.pieScheduleContainer}>
        <PieChart />
        <Schedule />
      </div>
    </div>
  );
};

export default DashboardBody;
