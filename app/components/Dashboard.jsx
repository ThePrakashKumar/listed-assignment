import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin?callbackUrl=/");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
