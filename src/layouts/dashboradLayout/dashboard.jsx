import React from "react";
import DashboardSideBar from "../../components/dashboardSideBar";
import DashboardMainLayout from "../../components/dashboardLayout";
import { useState } from "react";
import PatientManagment from "../../components/pateintManagement";
import ClinicalManagment from "../../components/clinicalManagment";
const Dashboard = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <div style={{ display: "flex" }}>
      <DashboardSideBar
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
      {toggleState === 1 ? <DashboardMainLayout /> : null}
      {toggleState === 2 ? <PatientManagment /> : null}
      {toggleState === 3 ? <ClinicalManagment /> : null}
    </div>
  );
};

export default Dashboard;
