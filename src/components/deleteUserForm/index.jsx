import "../input/input.css";
import "./delete.css";
import { LuSearch } from "react-icons/lu";
import FormInputs from "../formInputs";
import userDataAccess from "./userData";

const DeleteUserForm = () => {
  return (
    <div className="padDivSty">
      <FormInputs
        type="search"
        name="searchUser"
        id="1"
        placeholder="search user"
        iconUrl={<LuSearch />}
      />
      <ul className="delList">
        <li>PICTURE</li>
        <li>NAME</li>
        <li>EMAIL</li>
        <li>ACTION</li>
      </ul>
      <>
        {userDataAccess.map((value) => {
          return (
            <ul className="listData">
              <li>
                <img src={value.image} alt="alia" />
              </li>
              <li>{value.name}</li>
              <li>
                <button className="detailsBtn">{value.link}</button>
              </li>
              <li>
                <button className="deleteBtn">
                  <img src={value.buttonImg} alt="delete" />
                </button>
              </li>
            </ul>
          );
        })}
      </>
    </div>
  );
};

export default DeleteUserForm;
