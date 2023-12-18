import React from "react";
import "./styles.css";
import { CiGrid41 } from "react-icons/ci";
import { FaUserInjured } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
const DashboardSideBar = ({ toggleState, setToggleState }) => {
  const toggleTab = index => {
    setToggleState(index);
  };
  return (
    <>
      <ul className="listItems">
        <li
          className={toggleState === 1 ? "activeListItem" : "listItem"}
          onClick={() => toggleTab(1)}
        >
          <CiGrid41 />
          User Management
        </li>
        <li
          className={toggleState === 2 ? "activeListItem" : "listItem"}
          onClick={() => toggleTab(2)}
        >
          <FaUserInjured />
          Patient management
        </li>
        <li
          className={toggleState === 3 ? "activeListItem" : "listItem"}
          onClick={() => toggleTab(3)}
        >
          <FaClinicMedical />
          Clinical management
        </li>
      </ul>
    </>
  );
};

export default DashboardSideBar;
