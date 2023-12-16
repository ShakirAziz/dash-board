import React from "react";
import DashboardSideBar from "../../components/dashboardSideBar";
import DashboardMainLayout from "../../components/dashboardLayout";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <DashboardSideBar />
      <DashboardMainLayout />
    </div>
  );
};

export default Dashboard;
