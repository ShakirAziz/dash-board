import FormInputs from "../formInputs/index";

import { FaUserEdit } from "react-icons/fa";
const UpdateUserForm = () => {
  return (
    <>
      <form>
        <FormInputs
          type="text"
          id="1"
          name="username"
          iconUrl={<FaUserEdit />}
          placeholder="user name (to be update)"
        />
      </form>
    </>
  );
};

export default UpdateUserForm;
