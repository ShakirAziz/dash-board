import React from "react";
import "./styles.css";

const DashboardSideBar = ({ toggleState, setToggleState, tabs }) => {
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <ul className="listItems">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={toggleState === tab.id ? "activeListItem" : "listItem"}
            onClick={() => toggleTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DashboardSideBar;
