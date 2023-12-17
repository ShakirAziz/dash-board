import React from "react";
import "./styles.css";
const DashboardNavBar = () => {
  return (
    <>
      <ul className="navLinks">
        <li className="navLink">create user</li>
        <li className="navLink">update user</li>
        <li className="navLink">delete user</li>
        <li className="navLink">search user</li>
      </ul>
    </>
  );
};

export default DashboardNavBar;
