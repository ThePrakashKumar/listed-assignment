import DashboardCards from "./DashboardCards";
import Header from "./Header";
import styles from "./dashboardBody.module.css";

const DashboardBody = () => {
  return (
    <div className={styles.dashboardBodyContainer}>
      <Header />
      <DashboardCards />
    </div>
  );
};

export default DashboardBody;
