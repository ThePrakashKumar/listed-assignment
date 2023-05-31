import styles from "./dashboard.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import NavigationBody from "./NavigationBody";
import DashboardBody from "./DashboardBody";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin?callbackUrl=/");
  }

  return (
    <div className={styles.dashboardContainer}>
      <NavigationBody />
      <DashboardBody />
    </div>
  );
};

export default Dashboard;
