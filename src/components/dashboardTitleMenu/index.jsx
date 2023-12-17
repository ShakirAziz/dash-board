import React from "react";
import adimAvatar from "../../assets/Ellipse 1094.png";
const DashboardMenuTitle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <div>
        <h1 style={{ color: "#009D92", fontSize: "2.5rem", fontWeight: "900" }}>
          Add new user
        </h1>
        <p style={{ color: "white" }}>
          Create a brand new user and add them to this site.
        </p>
      </div>
      <div style={{ alignSelf: "end" }}>
        <img src={adimAvatar} alt="adimAvatar" />
      </div>
    </div>
  );
};

export default DashboardMenuTitle;
