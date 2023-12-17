import React from "react";
import "./styles.css";
import DashboardNavBar from "../dashboardNavBar";
import DashboardMenuTitle from "../dashboardTitleMenu";
import FormInputs from "../formInputs";
import userIcon from "../../assets/icons/Icons (2).png";
import userIcon1 from "../../assets/icons/Icons.png";
import FormButton from "../formButton";
const DashboardMainLayout = () => {
  return (
    <div className="mainContainer">
      <DashboardMenuTitle />
      <DashboardNavBar />
      <form>
        <FormInputs
          type="text"
          name="firstname"
          id="1"
          placeholder="First Name"
          iconUrl={userIcon}
          iconAlt="user first name"
        />
        <FormInputs
          type="text"
          name="lastname"
          id="2"
          placeholder="Last Name"
          iconUrl={userIcon}
          iconAlt="user last name"
        />
        <FormInputs
          type="email"
          name="gmail"
          id="3"
          placeholder="User Gmail"
          iconUrl={userIcon}
          iconAlt="user Mail"
        />
        <FormInputs
          type="password"
          name="userpassword"
          id="4"
          placeholder="User Password"
          iconUrl={userIcon1}
          iconAlt="user password"
          max="16"
        />
        <FormButton />
      </form>
    </div>
  );
};

export default DashboardMainLayout;
