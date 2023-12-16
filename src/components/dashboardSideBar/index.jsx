import React from "react";
import "./styles.css";
import { CiGrid41 } from "react-icons/ci";
import { FaUserInjured } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
const DashboardSideBar = () => {
  return (
    <>
      <ul className="listItems">
        <li className="listItem">
          <CiGrid41 />
          User Management
        </li>
        <li className="listItem">
          <FaUserInjured />
          Patient management
        </li>
        <li className="listItem">
          <FaClinicMedical />
          Clinical management
        </li>
      </ul>
    </>
  );
};

export default DashboardSideBar;
