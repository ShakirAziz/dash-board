import "../input/input.css";
import "./delete.css";
import { LuSearch } from "react-icons/lu";
import FormInputs from "../formInputs";
import userDataAccess from "./userData";
import InnerHeader from "../InnerHeader";

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
      <InnerHeader
        picture="PICTURE"
        name="NAME"
        email="EMAIL"
        action="ACTION"
      />
      <>
        {userDataAccess.map((value) => {
          return (
            <ul className="listData">
              <li className="firstSty">
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
