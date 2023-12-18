import "../input/input.css";
import "./delete.css";
import { LuSearch } from "react-icons/lu";
import FormInputs from "../formInputs";
import userDataAccess from "./userData";

const DeleteUserForm = () => {
  return (
    <>
      <FormInputs
        type="search"
        name="searchUser"
        id="1"
        placeholder="search user"
        iconUrl={<LuSearch />}
      />
      <table className="deleteTab">
        <tr>
          <th>pic</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        <>
          {userDataAccess.map((value) => {
            return (
              <tr className="tableRow">
                <td>
                  <img src={value.image} alt="alia" />
                </td>
                <td>{value.name}</td>
                <td>
                  <button>{value.link}</button>
                </td>
                <td>
                  <button>{value.buttonImg}</button>
                </td>
              </tr>
            );
          })}
        </>
      </table>
    </>
  );
};

export default DeleteUserForm;
