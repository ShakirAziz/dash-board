import React, { useState } from "react";
import DashboardNavBar from "../dashboardNavBar";
import DashboardMenuTitle from "../dashboardTitleMenu";
import CreateUserForm from "../CreateUserForm";
import UpdateUserForm from "../updateUserForm";
import DeleteUserForm from "../deleteUserForm";
import SearchUserForm from "../serachuserForm";
const AddUser = () => {
  const [actionTab, setActionTab] = useState(1);
  return (
    <>
      <DashboardMenuTitle />
      <DashboardNavBar actionTab={actionTab} setActionTab={setActionTab} />
      {actionTab === 1 && <CreateUserForm />}
      {actionTab === 2 && <UpdateUserForm />}
      {actionTab === 3 && <DeleteUserForm />}
      {actionTab === 4 && <SearchUserForm />}
    </>
  );
};

export default AddUser;
