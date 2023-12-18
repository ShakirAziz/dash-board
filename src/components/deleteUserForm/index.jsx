import ellipse from "../../assets/Ellipse 1094.png";
import "../input/input.css";
import "./delete.css";
import { LuSearch } from "react-icons/lu";
import FormInputs from "../formInputs";
import userDataAccess from "./index";
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
        <tr className="tableRow">
          <td>
            <img src={ellipse} alt="alia" />
          </td>
          <td>name of p</td>
          <td>
            <button>click for details</button>
          </td>
          <td>
            <button>dfdsfs</button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default DeleteUserForm;
